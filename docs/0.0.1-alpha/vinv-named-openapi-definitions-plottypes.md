# Untitled object in vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/plotTypes
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## plotTypes Type

`object` ([Details](vinv-named-openapi-definitions-plottypes.md))

# plotTypes Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [plotCircle](#plotcircle)   | `object` | Required | cannot be null | [vinv](vinv-named-openapi-definitions-plottypes-properties-plotcircle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/plotTypes/properties/plotCircle")   |
| [plotPolygon](#plotpolygon) | `array`  | Required | cannot be null | [vinv](vinv-named-openapi-definitions-plottypes-properties-plotpolygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/plotTypes/properties/plotPolygon") |

## plotCircle



`plotCircle`

*   is required

*   Type: `object` ([Details](vinv-named-openapi-definitions-plottypes-properties-plotcircle.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-plottypes-properties-plotcircle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/plotTypes/properties/plotCircle")

### plotCircle Type

`object` ([Details](vinv-named-openapi-definitions-plottypes-properties-plotcircle.md))

## plotPolygon



`plotPolygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-openapi-definitions-plottypes-properties-plotpolygon-polygon-coordinates-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-definitions-plottypes-properties-plotpolygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/definitions/plotTypes/properties/plotPolygon")

### plotPolygon Type

`object[][]` ([Location](vinv-named-openapi-definitions-plottypes-properties-plotpolygon-polygon-coordinates-location.md))

### plotPolygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
