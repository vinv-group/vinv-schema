import fs from 'fs'

import { createFile } from './types/create-test-schema.js'

console.log('Building:' + process.env.ENV_VINV_VERSION);

const UnsupportedKeywordsOpenApi = [
    "$schema",
    "additionalItems",
    "const",
    "contains",
    "dependencies",
    "id",
    "$id",
    "patternProperties",
    "propertyNames",
    "examples"
];
const UnsupportedKeywords = [
    "$schema"
];

async function building(){
    try{
    
        if (fs.existsSync(process.env.ENV_VINV_VERSION)) 
            fs.rmdirSync(process.env.ENV_VINV_VERSION, { recursive: true })
    
        if (!fs.existsSync(process.env.ENV_VINV_VERSION)){
            fs.mkdirSync(process.env.ENV_VINV_VERSION + '/example-files', { recursive: true })
            fs.mkdirSync(process.env.ENV_VINV_VERSION + '/named/example-files', { recursive: true })
            fs.mkdirSync(process.env.ENV_VINV_VERSION + '/openapi/example-files', { recursive: true })
        }
            
    
        console.log('---');
        await createFile('vinv-named', process.env.ENV_VINV_VERSION, '/named', UnsupportedKeywords)
        console.log('---');
        await createFile('vinv-named-openapi', process.env.ENV_VINV_VERSION, '/openapi', UnsupportedKeywordsOpenApi)
        console.log('---');
        await createFile('vinv', process.env.ENV_VINV_VERSION, '', UnsupportedKeywords)
    
    }catch(error){
        throw('ERROR: ', error);
    }
}
building();