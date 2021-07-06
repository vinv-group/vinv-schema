import fs from 'fs'
import  { validate }  from '../build/schema-bundle.js'

const distDir = 'dist';

try{
    
    if (fs.existsSync(distDir)) 
        fs.rmdirSync(distDir, { recursive: true })

    if (!fs.existsSync(distDir)) 
        fs.mkdirSync(distDir)


    await validate('0.1-alpha', true)
}catch(error){
    console.error(error);
}