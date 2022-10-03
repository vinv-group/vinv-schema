import fs from 'fs';
import { promisify } from 'util'
const writeFileAsync = promisify(fs.writeFile)

import $RefParser from '@apidevtools/json-schema-ref-parser'

import Ajv from "ajv"
import addFormats from "ajv-formats"

let ajv;

const argv = process.argv.slice(2);

const VERSION = argv[0];
if(!VERSION) console.error('No version given');
const SCHEMANAME = 'vinv-tree';

const distDirectory = `./dist/${VERSION}`;

const VERSIONCODE = process.env.npm_package_version

const dereference = async (version, schemaName) => {
    return await $RefParser.dereference(`./src/${version}/${schemaName}.json`);
}
const bundle = async (version, schemaName) => {
    return await $RefParser.bundle(`./src/${version}/${schemaName}.json`);
}

function clearUnsupportedKeywords(schema, unsupportedKeywords, multitype, anchor = null, anchors = []){
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






let schema = await dereference(VERSION, SCHEMANAME);

schema.properties = clearUnsupportedKeywords(schema.properties, ['$id', '$schema'], true, true, []);
schema = clearUnsupportedKeywords(schema, ['$defs'], true, true, []);

ajv = new Ajv({strict:false, allErrors:true});
addFormats(ajv)

const compiledSchema = ajv.addSchema(schema, 'dereferenced');
console.log(ajv.getSchema('https://raw.githubusercontent.com/vinv-group/vinv-tree/main/dist/0.0.1/vinv-tree.json#location').schema);
if(compiledSchema.errors){
    console.error(compiledSchema.errors);
}else{
    await writeFileAsync(`${distDirectory}/${SCHEMANAME}.dereferenced.min.json`, JSON.stringify(schema))
}



const bundled_schema = await bundle(VERSION, SCHEMANAME);
bundled_schema.properties = clearUnsupportedKeywords(bundled_schema.properties, ['$id', '$schema'], true, true, []);
// DARF NICHT 2 mal hinzugefügt werden
ajv = new Ajv({strict:false, allErrors:true});
addFormats(ajv)
const bundledSchema = ajv.addSchema(bundled_schema, 'bundled_schema');
console.log(JSON.stringify(ajv.getSchema('bundled_schema#location').schema, null, 2));

if(bundledSchema.errors){
    console.error(bundledSchema.errors);
}else{
    //await writeFileAsync(`${distDirectory}/${SCHEMANAME}.json`, JSON.stringify(bundled_schema, null, 2))
    await writeFileAsync(`${distDirectory}/${SCHEMANAME}.min.json`, JSON.stringify(bundled_schema))
}

console.log('done');