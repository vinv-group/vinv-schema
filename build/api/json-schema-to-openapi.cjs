const  fs = require('fs')
const  { promisify } = require('util')
const writeFileAsync = promisify(fs.writeFile)

const oas3 = require('../../src/openapi/openapi-3.0-template.json');

const VERSIONCODE = process.env.npm_package_version
const vinvSchema = require(`../../${VERSIONCODE}/openapi/vinv-named-openapi.min.json`);

const outputDir = VERSIONCODE + '/openapi';
const outputFileName = 'vinv.openapi'

async function create(oas3){
    console.log(oas3.components.schemas);
    for( let i in oas3.components.schemas){
        if(vinvSchema.definitions[i]){
            oas3.components.schemas[i] = vinvSchema.definitions[i]
        }else{
            console.error(i, 'does not exist');
            delete oas3.components.schemas[i]
        }
    }
    oas3.components.schemas.tree = vinvSchema.definitions.tree

    
    await writeFileAsync(`${outputDir}/${outputFileName}.json`, JSON.stringify(oas3, null, 2))
    console.log('--success');
}

//fs.rmdirSync(outputDir, { recursive: true })
//fs.mkdirSync(outputDir, { recursive: true })


create(oas3);