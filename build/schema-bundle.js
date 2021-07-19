import fs from 'fs'
import { promisify } from 'util'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import $RefParser from '@apidevtools/json-schema-ref-parser'

const writeFileAsync = promisify(fs.writeFile)

const ajv = new Ajv({strict: false})
addFormats(ajv)

const distDir = 'dist';

function removeNestedIds(schema){

  if(schema['$id'])
    delete schema['$id'];
  /*if(schema['$schema'])
    delete schema['$schema'];*/

  if(typeof schema === 'object'){
    for(let i in schema) 
      schema[i] = removeNestedIds(schema[i]);
  }
  return schema;
}

export async function validate(version, saveBundle){
  let bundled_schema;
  let save = saveBundle || false;

  /**
  * dereference $ref pointers in subschemata
  */
  try{
    bundled_schema = await $RefParser.bundle(`./${version}/vinv.json`);

    console.info('1/3 Schema successfully dereferenced.')
  }catch(error){
    throw(error)
  }

  /**
   * validate bundled Schema
   */
  try{
    bundled_schema.properties = removeNestedIds(bundled_schema.properties);

    const valid = ajv.compile(bundled_schema)
    if (!valid) {
      console.error(ajv.errors);
      throw 'error'
    }

    console.info('2/3 Schema validated.')

  }catch(error){

    throw(error)

  }

  /**
  * save dereference schema in dist directory
  */
  if(save){
    try{

      if (!fs.existsSync(distDir)) 
        fs.mkdirSync(distDir);
      
      bundled_schema['$id'] = `https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/${distDir}/${version}.schema.json`
      await writeFileAsync(`./${distDir}/${version}.schema.json`, JSON.stringify(bundled_schema, null, 2))

      bundled_schema['$id'] = `https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/${distDir}/${version}.schema.min.json`
      await writeFileAsync(`./${distDir}/${version}.schema.min.json`, JSON.stringify(bundled_schema))

      console.info('3/3 Schema successfully created in "dist" directory.')

    }catch(error){

      throw(error)

    }

  }

}