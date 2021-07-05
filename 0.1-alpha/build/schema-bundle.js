const fs = require('fs');
const { promisify } = require('util')
const Ajv = require("ajv")
const addFormats = require("ajv-formats")
const $RefParser = require("@apidevtools/json-schema-ref-parser");


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

async function validate(version){
  let bundled_schema;

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
  try{

    if (!fs.existsSync(distDir)) 
      fs.mkdirSync(distDir);
    
    bundled_schema['$id'] = `https://raw.githubusercontent.com/vinv-group/vinv-schema/alpha/${distDir}/${version}.json`
    await writeFileAsync(`./${distDir}/${version}.json`, JSON.stringify(bundled_schema, null, 2))

    bundled_schema['$id'] = `https://raw.githubusercontent.com/vinv-group/vinv-schema/alpha/${distDir}/${version}.min.json`
    await writeFileAsync(`./${distDir}/${version}.min.json`, JSON.stringify(bundled_schema))

    console.info('3/3 Schema successfully created in "dist" directory.')

  }catch(error){

    throw(error)

  }

}

validate("0.1-alpha");