# Location Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/polygon/items/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## items Type

`object` ([Location](vinv-named-definitions-location.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [vinv](vinv-named-definitions-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/coordinates")               |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/accuracy") |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

`coordinates`

*   is required

*   Type: `object` ([Coordinates](vinv-named-definitions-coordinates.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/coordinates")

### coordinates Type

`object` ([Coordinates](vinv-named-definitions-coordinates.md))

### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).

`accuracy`

*   is optional

*   Type: `number` ([Accuracy](vinv-named-definitions-location-properties-accuracy.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/accuracy")

### accuracy Type

`number` ([Accuracy](vinv-named-definitions-location-properties-accuracy.md))

### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### accuracy Examples

```json
3
```

```json
12
```
