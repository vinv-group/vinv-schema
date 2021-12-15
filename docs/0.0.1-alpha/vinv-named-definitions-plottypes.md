# Untitled object in vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots/properties/data/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## items Type

`object` ([Details](vinv-named-definitions-plottypes.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [plotCircle](#plotcircle)   | `object` | Required | cannot be null | [vinv](vinv-named-definitions-circle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotCircle")   |
| [plotPolygon](#plotpolygon) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotPolygon") |

## plotCircle



`plotCircle`

*   is required

*   Type: `object` ([Details](vinv-named-definitions-circle.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-circle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotCircle")

### plotCircle Type

`object` ([Details](vinv-named-definitions-circle.md))

## plotPolygon



`plotPolygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotPolygon")

### plotPolygon Type

`object[][]` ([Location](vinv-named-definitions-location.md))

### plotPolygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
