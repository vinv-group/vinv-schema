# Coordinates Schema

```txt
<<<<<<< HEAD:docs/0.0.1-alpha.0/vinv-definitions-coordinates.md
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/definitions/location/items/0
=======
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/coordinates
>>>>>>> main:docs/0.1-alpha/vinv-definitions-coordinates.md
```

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## coordinates Type

`number[]` ([Longitude](vinv-definitions-coordinates-longitude.md))

## coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`
