import Ajv from "ajv"
import addFormats from "ajv-formats"

import * as V01Alpha from '../0.1-alpha/dist/vinv.schema.min.json';

const ajv = new Ajv({strict:false})
addFormats(ajv)

ajv.addSchema(V01Alpha, 'alpha.json');

const validateVinv = ajv.compile({ $ref: 'alpha.json'});
const validateTree = ajv.compile({ $ref: 'alpha.json#/definitions/tree'});
const validateTrack = ajv.compile({ $ref: 'alpha.json#/definitions/track'});
const validateArea = ajv.compile({ $ref: 'alpha.json#/definitions/area'});

function schema(data:any):boolean{
    if(!validateVinv(data)){
        console.error(validateVinv.errors)
        return false;
    }else 
        return true;
}
function tree(data:any):boolean{
    if(!validateTree(data)){
        console.error(validateTree.errors)
        return false;
    }else 
        return true;
}
function track(data:any):boolean{
    if(!validateTrack(data)){
        console.error(validateTrack.errors)
        return false;
    }else 
        return true;
}
function area(data:any):boolean{
    if(!validateArea(data)){
        console.error(validateArea.errors)
        return false;
    }else 
        return true;
}
function getSchema(){
    return V01Alpha;
}
function getVersion():string{
    return '0.1-alpha';
}
const initialSchema = {'v':'0.1-alpha'};

export {initialSchema, schema, tree, track, area, getSchema, getVersion};