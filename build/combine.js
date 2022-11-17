import fs from 'fs';
import { promisify } from 'util'
const writeFileAsync = promisify(fs.writeFile)

import $RefParser from '@apidevtools/json-schema-ref-parser'
import { createExample } from './create-example.js'


import Ajv from "ajv"
import addFormats from "ajv-formats"

let ajv = new Ajv({strict:false, allErrors:true});
addFormats(ajv)

// CREATE EXAMPLE
async function createValid(fileName, bundled_schema, minExample){
    console.log(bundled_schema);
    const defaultExampleFile = createExample(bundled_schema, minExample)
    
    //defaultExampleFile.users = {"sdfsf":{}}

    //defaultExampleFile.created = new Date().toISOString();
    //defaultExampleFile['$schema'] = `../${fileName}.json`;

    
    const validate = ajv.compile(bundled_schema);
    const validDefault = validate(defaultExampleFile)

    if(!validDefault) {
        try{
            defaultExampleFile['$schema'] = `./${fileName}.min_temp_schema.json`;
            await writeFileAsync(`./_tmp/${fileName}.min_temp_example.json`, JSON.stringify(defaultExampleFile, null, 2))
            await writeFileAsync(`./_tmp/${fileName}.min_temp_schema.json`, JSON.stringify(bundled_schema, null, 2))

            console.log('--- Validate Tmp:')
            //console.log('Example:', defaultExampleFile, JSON.stringify(defaultExampleFile)); // <-richtig
            //console.log('---')
            //console.log('Schema:',  JSON.stringify(bundled_schema.definitions)); // <-falsch?
            console.log(validate.errors);
        }
        catch(err){
            console.error(err);
        }

        throw 'Example file not valid';
    }
    return defaultExampleFile;
}
// ---

const argv = process.argv.slice(2);

const VERSION = argv[0];
if(!VERSION) {
    throw new Error("No VERSION specified");
}

const SCHEMANAME = argv[1];
if(!SCHEMANAME) {
    throw new Error("No SCHEMANAME specified");
}

const distDirectory = `./docs/${SCHEMANAME}/`;
const VINV_FILE = `${distDirectory}${VERSION}.json`


const dereference = async (version, schemaName) => {
    return await $RefParser.dereference(`${VINV_FILE}`);
}
const bundle = async (version, schemaName) => {
    return await $RefParser.bundle(`${VINV_FILE}`)
}

function clearUnsupportedKeywords(schema, unsupportedKeywords, multitype=false, anchor = null, anchors = []){
    if(!schema) throw new Error('No schema provided');
    schema = JSON.parse(JSON.stringify(schema));
    var keys = Object.keys(schema);

    if(!multitype && schema.type  && typeof schema.type == 'object') {
        if(schema.minItems && schema.type.includes('null'))
            schema.minItems = 0;
        schema.type = schema.type.find(element => element !== "null");
    }

    if(typeof anchor === 'string' && anchor !== 'properties'){
        anchors = [...anchors, anchor]
        schema["$anchor"] = anchors.join('.');
    }

    for(var key of keys){
        if(unsupportedKeywords.includes(key)){
             delete schema[key];
        }

        if(typeof schema[key] == "object"){
            schema[key] = clearUnsupportedKeywords(schema[key], unsupportedKeywords, multitype, key, anchors);
        }

    }

    
    return schema;
}



/*let schema = await dereference(VERSION, SCHEMANAME);

schema.properties = clearUnsupportedKeywords(schema.properties, ['$id', 'id', '$schema'], true, true, []);
schema = clearUnsupportedKeywords(schema, ['$defs'], true, true, []);

ajv = new Ajv({strict:false, allErrors:true});
addFormats(ajv)

const compiledSchema = ajv.addSchema(schema, 'dereferenced');
//console.log(ajv.getSchema('dereferenced#images.image_trunk.compression').schema);
if(compiledSchema.errors){
    console.error(compiledSchema.errors);
}else{
    await writeFileAsync(`${distDirectory}.schema.json`, JSON.stringify(schema))
}*/



const bundled_schema = await bundle(VERSION, SCHEMANAME);
//bundled_schema.properties = clearUnsupportedKeywords(bundled_schema.properties, ['$id', '$schema'], true, true, []);

let exampleFile = await createValid('example', bundled_schema, false);

ajv = new Ajv({strict:false, allErrors:true});
addFormats(ajv)

const bundledSchema = ajv.addSchema(bundled_schema, 'bundled_schema');
//console.log(JSON.stringify(ajv.getSchema('bundled_schema').schema, null, 2));

//var result = ajv.getSchema("bundled_schema#location", {});
//console.log(result);

if(bundledSchema.errors){
    console.error(bundledSchema.errors);
}else{
    await writeFileAsync(`${distDirectory}${VERSION}/dereferenced.doc.json`, JSON.stringify(bundled_schema, null, 2))
    await writeFileAsync(`${distDirectory}${VERSION}/example.json`, JSON.stringify(exampleFile, null, 2))
}



console.log('done');