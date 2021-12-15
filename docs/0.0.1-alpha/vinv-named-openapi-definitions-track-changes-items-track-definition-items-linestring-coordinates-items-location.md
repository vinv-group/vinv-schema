# Location Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/track_history/items/2/items/0/items/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## 0 Type

`object` ([Location](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location.md))

# 0 Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                   |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [vinv](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/track_history/items/2/items/0/items/0/properties/coordinates") |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/track_history/items/2/items/0/items/0/properties/accuracy")       |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

`coordinates`

*   is required

*   Type: `object` ([Coordinates](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-coordinates.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/track_history/items/2/items/0/items/0/properties/coordinates")

### coordinates Type

`object` ([Coordinates](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-coordinates.md))

### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).

`accuracy`

*   is optional

*   Type: `number` ([Accuracy](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-accuracy.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/track_history/items/2/items/0/items/0/properties/accuracy")

### accuracy Type

`number` ([Accuracy](vinv-named-openapi-definitions-track-changes-items-track-definition-items-linestring-coordinates-items-location-properties-accuracy.md))

### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`
