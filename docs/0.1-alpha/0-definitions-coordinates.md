# Coordinates Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/definitions/filter/items/0/items/0
```

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.min.json\*](../../dist/0.1-alpha.schema.min.json "open original schema") |

## 0 Type

an array where each item follows the corresponding schema in the following list:

1.  [Longitude](0-definitions-coordinates-items-longitude.md "check type definition")
2.  [Latitude](0-definitions-coordinates-items-latitude.md "check type definition")
3.  [\[Altitude\]](0-definitions-coordinates-items-altitude.md "check type definition")

## 0 Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`
