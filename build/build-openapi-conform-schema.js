import fs from 'fs'
import { promisify } from 'util'

const writeFileAsync = promisify(fs.writeFile)

const UnsupportedKeywords = [
    "$schema",
    "additionalItems",
    "const",
    "contains",
    "dependencies",
    "id",
    "$id",
    "patternProperties",
    "propertyNames"
];

function clearUnsupportedKeywords(schema){
    var keys = Object.keys(schema);
    for(var key of keys){
        if(UnsupportedKeywords.includes(key)){
            delete schema[key];
        }
        if(typeof schema[key] == "object"){
            schema[key] = clearUnsupportedKeywords(schema[key]);
        }
    }
    //console.log(keys);
    //console.log(schema);
    return schema;
}

export async function makeOpenApiConform(version){
    let schema = await import(`../${version}/vinv-type.json`);
    console.log('--------');
    const clearedSchema = clearUnsupportedKeywords(schema.default);
    console.log(clearedSchema);
    console.log('--------');
    try{
      var distDirectory = `./${version}`;
      if (!fs.existsSync(distDirectory)) 
        fs.mkdirSync(distDirectory);
      
      await writeFileAsync(`${distDirectory}/vinv-openapi-conform.json`, JSON.stringify(clearedSchema, null, 2))

      console.info('OpenApi conform version created')

    }catch(error){

      throw(error)

    }

}