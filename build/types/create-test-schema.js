import fs from 'fs'
import { promisify } from 'util'
import { createExample } from './create-example.js'
import { objectToArray } from './object-to-array.js'
const writeFileAsync = promisify(fs.writeFile)
import $RefParser from '@apidevtools/json-schema-ref-parser'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

function clearUnsupportedKeywords(schema, unsupportedKeywords, mute){
    var keys = Object.keys(schema);
    for(var key of keys){

        if(unsupportedKeywords.includes(key) && !mute){
            delete schema[key];
        }

        if(typeof schema[key] == "object"){
            schema[key] = clearUnsupportedKeywords(schema[key], unsupportedKeywords, false);
        }

    }
    return schema;
}

export async function createFile(fileName, version, folder, unsupportedKeywords, minified = false, bundleType = 'bundle'){
    return new Promise(async (resolve, reject) =>  {
        let bundled_schema;

        console.log(`Start creating ${fileName} schema`);

        try{
            const ajv = new Ajv({strict: false})
            addFormats(ajv)

            if(bundleType == 'dereference')
                bundled_schema = await $RefParser.dereference(`./src/${version}/vinv.json`);
            else
                bundled_schema = await $RefParser.bundle(`./src/${version}/vinv.json`);

            if(minified){            
                for(let key in bundled_schema.definitions){
                    bundled_schema.definitions[key] = objectToArray(bundled_schema.definitions[key]);
                }
            }
            
            const distDirectory = `./${version}`;

            const exampleFile = createExample(bundled_schema, `../${fileName}.json`)
            exampleFile.created = new Date().toISOString();

            bundled_schema.definitions = clearUnsupportedKeywords(bundled_schema.definitions, unsupportedKeywords, true);

            

            const validate = ajv.compile(bundled_schema);
            const valid = validate(exampleFile)

            if(!valid) {
                console.log(validate.errors);
                throw 'Example file not valid';
            }else console.log('Example file successfully validated');

            console.log('createFile', `${distDirectory}${folder}/${fileName}.min.json`);

            bundled_schema['$id'] = `https://schema.vinv.io/${version}/${fileName}.min.json`
            bundled_schema['properties']['$schema']['examples'][0] = bundled_schema['$id']
            await writeFileAsync(`${distDirectory}${folder}/${fileName}.min.json`, JSON.stringify(bundled_schema))
            console.log('Schema built: ', `${distDirectory}${folder}/${fileName}.min.json`);
            
            bundled_schema['$id'] = `https://schema.vinv.io/${version}/${fileName}.json`
            bundled_schema['properties']['$schema']['examples'][0] = bundled_schema['$id']
            await writeFileAsync(`${distDirectory}${folder}/${fileName}.json`, JSON.stringify(bundled_schema, null, 2))
            console.log('Schema built: ', `${distDirectory}${folder}/${fileName}.json`);

            

            await writeFileAsync(`${distDirectory}/example-files/${fileName}.vinv`, JSON.stringify(exampleFile))
            console.log('Example built: ', `${distDirectory}/example-files/${fileName}.vinv`);

            

            resolve(true)
        } catch(error) {
            reject(error)
        }
    })
}