import { validateExamples } from './validate_examples.js'

try{
    await validateExamples('0.1-alpha')
}catch(error){
    console.error(error);
}

