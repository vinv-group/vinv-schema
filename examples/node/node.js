var VinvSchema = require('../../dist/schema.cjs');

var vinv = new VinvSchema({v:'0.0.1-alpha'});
        
async function init(){
    console.log('node inti');
    var exampleDocument = await vinv.getExample('/Users/b-mac/sites/vinv/vinv-schema/0.0.1-alpha/example-files/vinv.vinv');
    console.log(exampleDocument);

    var isValid = await vinv.validate(exampleDocument);
    console.log('isValid:',  isValid);

    var singleTree = Object.values(exampleDocument.inventory.trees.data)[0];
    var treeValid = await vinv.validate(singleTree, 'Tree');
    console.log('isValid:',  treeValid);
}

init();