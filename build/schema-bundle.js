import fs from 'fs'
import { promisify } from 'util'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import $RefParser from '@apidevtools/json-schema-ref-parser'

import convert from '@openapi-contrib/json-schema-to-openapi-schema';
import { compile, compileFromFile } from 'json-schema-to-typescript'



const writeFileAsync = promisify(fs.writeFile)

const ajv = new Ajv({strict: false})
addFormats(ajv)

function removeNestedIds(schema){

  if(schema['$id'])
    delete schema['$id'];

  if(typeof schema === 'object'){
    for(let i in schema) 
      schema[i] = removeNestedIds(schema[i]);
  }
  return schema;
}

export async function validate(version, saveBundle){
  let bundled_schema, bundled_schema_tuple;
  let save = saveBundle || false;

  /**
  * dereference $ref pointers in subschemata
  */
  try{
    
    let schema = await import(`../src/${version}/vinv-tuple.json`);

    // Tuple Version
    for (var key in schema.default.definitions) {
      if (schema.default.definitions[key].hasOwnProperty('$ref')) {
        schema.default.definitions[key]['$ref'] = `./subschema-tuple/` + /[^/]*$/.exec(schema.default.definitions[key]['$ref'])[0];
      }
    }
    await writeFileAsync(`./src/${version}/vinv-tuple.json`, JSON.stringify(schema.default, null, 2))

    schema = await import(`../src/${version}/vinv-object.json`);
    // Object/Type Version
    for (var key in schema.default.definitions) {
      if (schema.default.definitions[key].hasOwnProperty('$ref')) {
        schema.default.definitions[key]['$ref'] = `./subschema-object/` + /[^/]*$/.exec(schema.default.definitions[key]['$ref'])[0];
      }
    }
    await writeFileAsync(`./src/${version}/vinv-object.json`, JSON.stringify(schema.default, null, 2))

    bundled_schema = await $RefParser.dereference(`./src/${version}/vinv-object.json`);
    bundled_schema_tuple = await $RefParser.bundle(`./src/${version}/vinv-tuple.json`);

    console.info('1/3 Schema successfully dereferenced.')
  }catch(error){
    throw(error)
  }
  /**
   * validate bundled Schema
   */
  try{
    bundled_schema_tuple.properties = removeNestedIds(bundled_schema_tuple.properties);

    const valid_tuple = ajv.compile(bundled_schema_tuple)
    if (!valid_tuple) {
      console.error(ajv.errors);
      throw 'error'
    }

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
      var distDirectory = `./${version}`;
      if (!fs.existsSync(distDirectory)) 
        fs.mkdirSync(distDirectory);
      
        bundled_schema_tuple['$id'] = `https://schema.vinv.io/${version}/vinv.json`
      await writeFileAsync(`${distDirectory}/vinv.json`, JSON.stringify(bundled_schema_tuple, null, 2))

      bundled_schema_tuple['$id'] = `https://schema.vinv.io/${version}/vinv.min.json`
      await writeFileAsync(`${distDirectory}/vinv.min.json`, JSON.stringify(bundled_schema_tuple))

      bundled_schema['$id'] = `https://schema.vinv.io/${version}/vinv-type.json`
      await writeFileAsync(`${distDirectory}/vinv-type.json`, JSON.stringify(bundled_schema, null, 2))

      bundled_schema['$id'] = `https://schema.vinv.io/${version}/vinv-type.min.json`
      await writeFileAsync(`${distDirectory}/vinv-type.min.json`, JSON.stringify(bundled_schema))

      console.info('3/3 Schema successfully created in "dist" directory.')

    }catch(error){

      throw(error)

    }

    try{
       // json2ts --input 0.0.1-alpha.0/vinv-type.min.json --output ./dist/0.0.1-alpha.0.d.ts
      //compileFromFile(`${distDirectory}/vinv-type.min.json`).then(ts => fs.writeFileSync(`./dist/${version}.d.ts`, ts))

    }catch(error){

      throw(error)

    }
  }

  

}