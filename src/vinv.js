import Ajv from "ajv"
import addFormats from "ajv-formats"

const versions = {}

import * as v001alpha from '../0.0.1-alpha/vinv.min.json';
//import * as v001alphaExample from '../0.0.1-alpha/example-files/vinv.vinv';
versions["0.0.1-alpha"] = {
    schema: v001alpha,
    //example: v001alphaExample
};


const ajv = new Ajv({strict:false})
addFormats(ajv) 

//const versions = ['0.0.1-alpha'];
/*
export async function validateDocument(attr){
    if(!attr || !attr.document) {
        console.error('vinv Document missing');
        return;
    }
    const schema = validateJson(attr.document)
    if(!schema) return;
    else if(!schema.v || !versions.includes(schema.v)){
        console.error('Version missing in Schema or not valid');
        return;
    }

    const vinvSchema = await fetchJson(`../${schema.v}/vinv.min.json`);
        
    const compiledSchema = ajv.compile(vinvSchema);

    compiledSchema(attr.document)

    if(compiledSchema.errors) return compiledSchema.errors;

    return true;
}
export async function validateTree(tree){
    if(!tree || typeof tree!== 'object') return;

    const treeSchema = ajv.compile({ $ref: 'named#/definitions/tree'});

    console.log('sdf');
}
export async function getExampleDocument(version){
    if(!version || !versions.includes(version)) version = versions[0];
    return await fetchJson(`../${version}/example-files/vinv.vinv`);
}

function fetchJson(url){
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then(data => {
            return data
        })
}
function validateJson(jsonString){
    let json;
    try {
        if(typeof jsonString === 'string') json = JSON.parse(jsonString)
        else if(typeof jsonString === 'object') json = jsonString
    } catch (error) {
        console.error('Not valid JSON');
    }
    return json;
}*/




export default class VinvSchema {
    constructor(attr){

        this.version = versions[0];
        this.events = {};
        
        if(attr && attr.v && versions[attr.v]) this.version = attr.v
        if(attr && attr.document) {
            const document = this._validateJson(attr.document)
            if(schema && document.v && versions[attr.v]) this.version = document.v
        }
        this._setupAjv(); 
    }
    on(type, fn){
        if(typeof type === 'string' && typeof fn === 'function'){
            this.events[type] = fn;
        }
    }
    _triggerOn(type){
        if(this.events[type]) this.events[type]();
    }
    async _setupAjv(){
        const vinvSchema = versions["0.0.1-alpha"].schema; //await this._fetchJson(`../${this.version}/vinv.min.json`);
        
        ajv.addSchema(vinvSchema, `${this.version}`);
        
        console.log('ready');
        this._triggerOn('ready');
    }
    _fetchJson(url){
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            }).then(data => {
                return data
            })
    }
    async getExample(url){
        console.log(url);
        return await this._fetchJson(url);
    }
    _validateJson(jsonString){
        let json;
        try {
            if(typeof jsonString === 'string') json = JSON.parse(jsonString)
            else if(typeof jsonString === 'object') json = jsonString
        } catch (error) {
            console.error('Not valid JSON');
        }
        return json;
    }
    async validate(document, definition){

        if(!document) {
            console.error('vinv Document missing');
            return;
        }

        const schema = this._validateJson(document);
        if(!schema) return;
        
        if(!schema.v && !this.version){
            console.error('Version missing in Schema');
            return;
        }else if(schema.v && schema.v !== this.version){
            console.error('Different versions');
            return;
        }
        const path = definition ? `/definitions/${definition.toLowerCase()}` : '';
        this.compiledSchema = ajv.compile({ $ref: `${this.version}#${path}`});
        
        this.compiledSchema(schema)

        if(this.compiledSchema.errors){
            console.log(this.compiledSchema.errors);
            return this.compiledSchema.errors;
        }

        return true;
    }

}