import Ajv from "ajv"
import addFormats from "ajv-formats"

import * as V01AlphaTuple from '../../0.0.1-alpha.0/vinv.json';
import * as V01AlphaType from '../../0.0.1-alpha.0/vinv-type.min.json';

const version: string = '0.0.1-alpha.0';
const ajv = new Ajv({strict:false})
addFormats(ajv)

ajv.addSchema(V01AlphaTuple, 'alpha-tuple.json');
ajv.addSchema(V01AlphaType, 'alpha-type.json');

const vinvSchema = ajv.compile({ $ref: 'alpha-tuple.json'});
const treeSchema = ajv.compile({ $ref: 'alpha-type.json#/definitions/tree'});
const areaSchema = ajv.compile({ $ref: 'alpha-type.json#/definitions/area'});

export function validateSchema(data:any):boolean{
    if(!vinvSchema(data)){
        console.error(vinvSchema.errors, data)
        return false;
    }else 
        return true;
}
export function validateTree(data:any):boolean{
    if(!treeSchema(data)){
        console.error(treeSchema.errors, data)
        return false;
    }else 
        return true;
}
export function validateArea(data:any):boolean{
    if(!areaSchema(data)){
        console.error(areaSchema.errors, data)
        return false;
    }else 
        return true;
}
export function getSchema(){
    return V01AlphaTuple;
}
export function getTreeSchema(){
    return V01AlphaType.definitions.tree;
}
export function getAreaSchema(){
    return V01AlphaType.definitions.area;
}
export function getVersion():string{
    return version;
}
