import fs from 'fs';
import { promisify } from 'util'
const writeFileAsync = promisify(fs.writeFile)

import $RefParser from '@apidevtools/json-schema-ref-parser'

const argv = process.argv.slice(2);

const VERSION = argv[0];
if(!VERSION) console.error('No version given');
const SCHEMANAME = 'vinv-tree';

const distDirectory = `./dist/${VERSION}`;


console.log(argv);

const VERSIONCODE = process.env.npm_package_version

const dereference = async (version, schemaName) => {
    return await $RefParser.dereference(`./src/${version}/${schemaName}.json`);
}
const bundle = async (version, schemaName) => {
    return $RefParser.bundle(`./src/${version}/${schemaName}.json`);
}

function clearUnsupportedKeywords(schema, unsupportedKeywords, mute, multitype){
    var keys = Object.keys(schema);

    if(!multitype && schema.type  && typeof schema.type == 'object') {
        if(schema.minItems && schema.type.includes('null'))
            schema.minItems = 0;
        schema.type = schema.type.find(element => element !== "null");
    }

    for(var key of keys){

        if(unsupportedKeywords.includes(key) && !mute){
            delete schema[key];
        }

        if(typeof schema[key] == "object"){
            schema[key] = clearUnsupportedKeywords(schema[key], unsupportedKeywords, false, multitype);
        }

    }
    return schema;
}



const schema = await dereference(VERSION, SCHEMANAME);
schema.properties = clearUnsupportedKeywords(schema.properties, ['$defs'], true, true);
await writeFileAsync(`${distDirectory}/${SCHEMANAME}.dereferenced.min.json`, JSON.stringify(schema))

const bundled_schema = await bundle(VERSION, SCHEMANAME);
await writeFileAsync(`${distDirectory}/${SCHEMANAME}.json`, JSON.stringify(bundled_schema, null, 2))
await writeFileAsync(`${distDirectory}/${SCHEMANAME}.min.json`, JSON.stringify(bundled_schema))