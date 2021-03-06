import {nanoid} from 'nanoid';

function generateDataFromSchema(schema, definitions, parentId) {
    if (!schema) { return }
  
    if(schema.type === 'object'){
        
        const parsedData = {}
    
        if(schema.properties)
            Object.keys(schema.properties).forEach( (item) => {
                parsedData[item] = generateDataFromSchema(schema.properties[item], definitions)
            })
        else if(schema.patternProperties){
            const id = nanoid();
            
            Object.values(schema.patternProperties).forEach( (item) => {
                if(item['$ref']){
                    const refName = item['$ref'].split('/')[2];
                    parsedData[id] = generateDataFromSchema(definitions[refName], definitions, id)
                }
                //parsedData[id] = generateDataFromSchema(item, definitions, id)
            })
        }

        if(parsedData['id'] && parentId){
            delete parsedData['id']
        }
            
            
        return parsedData
    }else if(schema['$ref']){
        const refName = schema['$ref'].split('/')[2];
        return generateDataFromSchema(definitions[refName], definitions)
    }else if(schema.type === 'array' || (Array.isArray(schema.type) && schema.type.includes('array'))){
        const parsedData = [];

        if(Array.isArray(schema.items)){
            for(let key in schema.items){
                parsedData.push(generateDataFromSchema(schema.items[key], definitions));
            }
        }else{
            const rep = schema.minItems || 1;
            for(let i = 0; i < rep; i ++){
                if(schema.items)
                    parsedData.push(generateDataFromSchema(schema.items, definitions));
            }
        }

        return parsedData
    }

    if (schema.examples) {
        return schema.examples[Math.round(schema.examples.length-1)]
    }else{
        console.error('Missing Example', schema);
    }
  }


export function createExample(schema, parentSchema){
    const example = generateDataFromSchema(schema, schema.definitions);
    example['$schema'] = parentSchema;
    return example;
}