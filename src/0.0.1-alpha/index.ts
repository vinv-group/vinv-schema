import Ajv from "ajv"
import addFormats from "ajv-formats"

import VinvSchema from '../../0.0.1-alpha/vinv.json';
//import test from '../../0.0.1-alpha.0/vinv.json';
import ExampleFile from '../../0.0.1-alpha/example-files/vinv.json';


import * as V01AlphaType from '../../0.0.1-alpha/named/vinv-named.min.json';

const version: string = '0.0.1-alpha.0';
const ajv = new Ajv({strict:false})
addFormats(ajv)

//ajv.addSchema(VinvSchema, 'unnamed');
ajv.addSchema(V01AlphaType, 'named');

const vinvSchema = ajv.compile(VinvSchema);
const treeSchema = ajv.compile({ $ref: 'named#/definitions/tree'});
const areaSchema = ajv.compile({ $ref: 'named#/definitions/area'});

export function validateSchema(data:any):object{
    if(typeof data === 'string') data = JSON.parse(data)
    if(!vinvSchema(data)){
        return vinvSchema.errors;
    }else 
        return vinvSchema.errors;
}
export function validateTree(data:any):boolean{
    const valid = treeSchema(data);
    if(!valid){
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
export function getExample():object{
    return ExampleFile;
}
export function getSchema(){
    return VinvSchema;
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
