
import Ajv, {JSONSchemaType} from "ajv"
import addFormats from "ajv-formats"

const ajv = new Ajv()
addFormats(ajv) 

export default class VinvSchema {
    constructor(){
        
    }
    fetchSchema(version:string): Promise<string>{
        return fetch(`../${version}/vinv.min.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                console.log(response.json);
                return response.json()
            }).then(data => {
                return data.data
            })
    }
    async validate(version:string){

        const data = await this.fetchSchema(version);
 
        //const vinvSchema = this.ajv.compile(VinvSchema);
    }

}