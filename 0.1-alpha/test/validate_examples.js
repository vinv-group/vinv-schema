const fs = require('fs');
const { promisify } = require('util')
const Ajv = require("ajv")
const addFormats = require("ajv-formats")

const schemaBundle = require("../../dist/0.1-alpha.min");

const ajv = new Ajv({strict: false})
addFormats(ajv)
const validate = ajv.compile(schemaBundle);

const readFileAsync = promisify(fs.readFile)
const readDirAsync = promisify(fs.readdir)

const exampleDirectory = 'examples'


async function validateExamples(version){

    const directory = `./${version}/${exampleDirectory}/`

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

validateExamples("0.1-alpha");