# Coordinates Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/main/dist/0.1-alpha.min.json#/properties/trees/items/0/additionalProperties/items/0/items/0
```

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.min.json\*](../out/0.1-alpha.min.json "open original schema") |

## 0 Type

an array where each item follows the corresponding schema in the following list:

1.  [Longitude](0-properties-trees-items-0-tree-definition-items-location-items-coordinates-items-longitude.md "check type definition")
2.  [Latitude](0-properties-trees-items-0-tree-definition-items-location-items-coordinates-items-latitude.md "check type definition")
3.  and all following items must follow the schema: [\[Altitude\]](0-properties-trees-items-0-tree-definition-items-location-items-coordinates-altitude.md "check type definition")

## 0 Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`
