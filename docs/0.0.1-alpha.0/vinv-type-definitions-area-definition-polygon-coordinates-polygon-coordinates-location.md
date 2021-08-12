# Location Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area/items/items/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## items Type

`object` ([Location](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location.md))

# Location Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :-------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [vinv](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-coordinates.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area/items/items/items/properties/coordinates") |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area/items/items/items/properties/accuracy")       |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


`coordinates`

-   is required
-   Type: `object` ([Coordinates](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-coordinates.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-coordinates.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area/items/items/items/properties/coordinates")

### coordinates Type

`object` ([Coordinates](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-coordinates.md))

### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).


`accuracy`

-   is optional
-   Type: `number` ([Accuracy](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-accuracy.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area/items/items/items/properties/accuracy")

### accuracy Type

`number` ([Accuracy](vinv-type-definitions-area-definition-polygon-coordinates-polygon-coordinates-location-properties-accuracy.md))

### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`
