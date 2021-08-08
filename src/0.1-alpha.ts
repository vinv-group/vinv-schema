import Ajv from "ajv"
import addFormats from "ajv-formats"

import * as V01Alpha from '../0.1-alpha/dist/vinv.schema.min.json';

const ajv = new Ajv({strict:false})
addFormats(ajv)

ajv.addSchema(V01Alpha, 'alpha.json');

const validateVinv = ajv.compile({ $ref: 'alpha.json'});
const validateTree = ajv.compile({ $ref: 'alpha.json#/definitions/tree'});
const validateArea = ajv.compile({ $ref: 'alpha.json#/definitions/area'});

export function schema(data:any):boolean{
    if(!validateVinv(data)){
        console.error(validateVinv.errors)
        return false;
    }else 
        return true;
}
export function tree(data:any):boolean{
    if(!validateTree(data)){
        console.error(validateTree.errors)
        return false;
    }else 
        return true;
}
export function area(data:any):boolean{
    if(!validateArea(data)){
        console.error(validateArea.errors)
        return false;
    }else 
        return true;
}
export function getSchema(){
    return V01Alpha;
}
export function getVersion():string{
    return '0.1-alpha';
}
export const initialSchema = {'v':'0.1-alpha'};