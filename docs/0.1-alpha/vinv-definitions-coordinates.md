# Coordinates Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/coordinates
```

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## coordinates Type

`number[]` ([Longitude](vinv-definitions-coordinates-longitude.md))

## coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`
