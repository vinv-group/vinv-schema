# Location Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/tree/properties/location
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## location Type

`object` ([Location](vinv-definitions-location.md))

# Location Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `array`  | Required | cannot be null | [vinv](vinv-definitions-coordinates.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/coordinates")               |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-definitions-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/accuracy") |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


`coordinates`

-   is required
-   Type: `number[]` ([Longitude](vinv-definitions-coordinates-longitude.md))
-   cannot be null
-   defined in: [vinv](vinv-definitions-coordinates.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/coordinates")

### coordinates Type

`number[]` ([Longitude](vinv-definitions-coordinates-longitude.md))

### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).


`accuracy`

-   is optional
-   Type: `number` ([Accuracy](vinv-definitions-location-properties-accuracy.md))
-   cannot be null
-   defined in: [vinv](vinv-definitions-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/location/properties/accuracy")

### accuracy Type

`number` ([Accuracy](vinv-definitions-location-properties-accuracy.md))

### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`
