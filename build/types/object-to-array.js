Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
export function objectToArray(schema){

    //if(schema.title && schema.$ref == '#/definitions/id') return schema;
    
    if(schema.type && schema.type === 'object'){
        const array = Object.assign({}, schema);
        array.type = 'array';
        array.items = [];

        array.minItems = schema.required ? Object.size(schema.required) : 0;
        array.maxItems = schema.properties ? Object.size(schema.properties): 0;
        delete array.required;
        delete array.properties;
        
        if(schema.properties){
            for(let element of Object.values(schema.properties)){
                if(element.$ref === '#/definitions/id') continue;
                array.items.push(objectToArray(element));
            }
        }
            

        schema = array;
    }else if(schema.type && schema.items && schema.type === 'array' || (Array.isArray(schema.type) && schema.type.includes('array'))){
        if(Array.isArray(schema.items)){
            for(let key in schema.items){
                schema.items[key] = objectToArray(schema.items[key]);
            }
        }else{
            schema.items = objectToArray(schema.items);
        }
    }

    if(schema.additionalItems){
        schema.additionalItems = objectToArray(schema.additionalItems);
    }
    if(schema.definitions){
        for(let key in schema.definitions){
            schema.definitions[key] = objectToArray(schema.definitions[key]);
        }
    }

    return schema
}