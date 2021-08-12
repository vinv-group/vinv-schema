import fs from 'fs'
import { promisify } from 'util'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import schemaBundle from '../0.0.1-alpha.0/vinv.min.json'

const ajv = new Ajv({strict: false})
addFormats(ajv)
const validate = ajv.compile(schemaBundle);

const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

async function validateExamples(version){

    const directory = `./src/${version}/examples/files/`

    try{
        const files = await readDirAsync(directory);

        for(let file in files){
            const rawFileContent = await readFileAsync(`${directory}/${files[file]}`);
            const fileContent = JSON.parse(rawFileContent);

            const valid = validate(fileContent)

            console.info('File: ', files[file]);
            if (!valid){
                console.error(validate.errors)
                throw 'error';
            }else{
                console.info('passed successfully');
            }
        }

    }catch(err){
        throw err
    }
    
}

export { validateExamples };