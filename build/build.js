import fs from 'fs'
import  { validate }  from '../build/schema-bundle.js'
import  { makeOpenApiConform }  from './build-openapi-conform-schema.js'

console.log('Building:' + process.env.ENV_VINV_VERSION);

try{
    
    if (fs.existsSync(process.env.ENV_VINV_VERSION)) 
        fs.rmdirSync(process.env.ENV_VINV_VERSION, { recursive: true })

    if (!fs.existsSync(process.env.ENV_VINV_VERSION)) 
        fs.mkdirSync(process.env.ENV_VINV_VERSION)


    await validate(process.env.ENV_VINV_VERSION, true)
    await makeOpenApiConform(process.env.ENV_VINV_VERSION, true)
}catch(error){
    console.error(error);
}