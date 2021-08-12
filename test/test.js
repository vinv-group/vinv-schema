import { validateExamples } from './validate_examples.js'

try{
    await validateExamples(process.env.ENV_VINV_VERSION)
}catch(error){
    console.error(error);
}

