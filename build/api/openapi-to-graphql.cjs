const  fs = require('fs')
const  { promisify } = require('util')
const writeFileAsync = promisify(fs.writeFile)
const { createGraphQLSchema } = require("openapi-to-graphql");
const { execute, printSchema, subscribe } = require('graphql')

const VERSIONCODE = process.env.npm_package_version
const oas3 = require(`../../${VERSIONCODE}/openapi/vinv.openapi.json`);

const outputDir = VERSIONCODE + '/graphql';
const outputFileName = 'vinv'




async function create(oas3){
    const { schema, report } = await createGraphQLSchema(oas3, {
        customResolvers: {
            'I <3 Books API': {
              '/favoriteBooks/{name}': {
                'get': (obj, args, context, info) => {
                  return {
                    books: [
                      'A Guide to OpenAPI-to-GraphQL',
                      'Why OpenAPI-to-GraphQL is Amazing',
                      'Long Live OpenAPI-to-GraphQL!'
                    ]
                  }
                }
              }
            }
          }
    });
    console.log(schema);
    await writeFileAsync(`${outputDir}/${outputFileName}.graphQL`, printSchema(schema))
}



fs.rmdirSync(outputDir, { recursive: true })
fs.mkdirSync(outputDir, { recursive: true })

console.log(oas3);
create(oas3);