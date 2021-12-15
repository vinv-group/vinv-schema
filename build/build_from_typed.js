import fs from 'fs'
import { createFile } from './types/create-test-schema.js'

const VERSIONCODE = process.env.npm_package_version

const UnsupportedKeywordsOpenApi = [
    "$schema",
    "additionalItems",
    "const",
    "contains",
    "dependencies",
    "$id",
    "patternProperties",
    "propertyNames",
    "examples"
];
const UnsupportedKeywords = [
    "$schema"
];
const UnsupportedKeywordsTulip = [
    "$schema",
    "id"
];

async function building(){
    try{
    
        if (fs.existsSync(VERSIONCODE)) 
            fs.rmdirSync(VERSIONCODE, { recursive: true })
    
        if (!fs.existsSync(VERSIONCODE)){
            fs.mkdirSync(VERSIONCODE + '/example-files', { recursive: true })
            fs.mkdirSync(VERSIONCODE + '/named', { recursive: true })
            fs.mkdirSync(VERSIONCODE + '/openapi', { recursive: true })
        }
            
    
        console.log('---');
        await createFile('vinv-named', VERSIONCODE, '/named', UnsupportedKeywords, false)
        console.log('---');
        await createFile('vinv-named-openapi', VERSIONCODE, '/openapi', UnsupportedKeywordsOpenApi, false, 'dereference')
        console.log('---');
        await createFile('vinv', VERSIONCODE, '', UnsupportedKeywordsTulip, true)
    
    }catch(error){
        throw('ERROR: ', error);
    }
}
building();