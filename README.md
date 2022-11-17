# vinv-tree
Individual tree schema



build: node ./build/combine.js 0.0.1



jsonschema2md -d dist/0.0.1/dereferenced -o ../../documentation/src/vinv-individual-tree -l en_US



jsonschema2md -d dist/0.0.1/dereferenced -o ../../documentation/src/vinv-individual-tree -l en_US

## Envelope
node ./build/combine.js 0.0.1 envelope
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/envelope -o /Users/b-mac/sites/vinv/documentation/src/basics/envelope/0.0.1 -l en_US -n -p vinv:id -e doc.json

## Individual Tree
node ./build/combine.js 0.0.1 vinv-individual-tree
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/vinv-individual-tree -o /Users/b-mac/sites/vinv/documentation/src/specifications/vinv-individual-tree/0.0.1 -l en_US -n -p vinv:id -e doc.json


## Export location
node ./build/combine.js 0.0.1 location
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/location/ -o /Users/b-mac/sites/vinv/documentation/src/basics/location/0.0.1 -l en_US -n -p vinv:basics -e doc.json

## Export Coordinates
node ./build/combine.js 0.0.1 coordinates
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/coordinates/ -o /Users/b-mac/sites/vinv/documentation/src/basics/coordinates/0.0.1 -l en_US -n -p vinv:basics -e doc.json

## Export Image
node ./build/combine.js 0.0.1 image
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/image/ -o /Users/b-mac/sites/vinv/documentation/src/basics/image/0.0.1 -l en_US -n -p vinv:basics -e doc.json

## Export Image
node ./build/combine.js 0.0.1 species
jsonschema2md -d /Users/b-mac/sites/vinv/vinv-schemas/vinv-tree/docs/species/ -o /Users/b-mac/sites/vinv/documentation/src/species/0.0.1 -l en_US -n -p vinv:basics -e doc.json