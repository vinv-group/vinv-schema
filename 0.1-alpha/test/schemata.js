const fs = require('fs');
const Ajv = require("ajv")
const $RefParser = require("@apidevtools/json-schema-ref-parser");

const ajv = new Ajv({allErrors: true})


async function validate(){
  /**
   * dereference
   */
  const inline_schema = await $RefParser.dereference('./0.1-alpha/vinv.json');

  /**
   * check SChemata
   */

  console.log(inline_schema);
}

validate();
/*
const data = fs.readFileSync("./0.1-alpha/vinv.json");
const json_schema = JSON.parse(data);


this.validator = ajv.compile(json_schema);

const valid = validate(data)
if (!valid) console.log(validate.errors)*/