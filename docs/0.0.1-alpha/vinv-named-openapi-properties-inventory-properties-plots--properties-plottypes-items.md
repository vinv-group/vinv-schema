# Untitled object in vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots/properties/data/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## items Type

`object` ([Details](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [plotCircle](#plotcircle)   | `object` | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotcircle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots/properties/data/items/properties/plotCircle")   |
| [plotPolygon](#plotpolygon) | `array`  | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotpolygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots/properties/data/items/properties/plotPolygon") |

## plotCircle



`plotCircle`

*   is required

*   Type: `object` ([Details](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotcircle.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotcircle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots/properties/data/items/properties/plotCircle")

### plotCircle Type

`object` ([Details](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotcircle.md))

## plotPolygon



`plotPolygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotpolygon-polygon-coordinates-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotpolygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots/properties/data/items/properties/plotPolygon")

### plotPolygon Type

`object[][]` ([Location](vinv-named-openapi-properties-inventory-properties-plots--properties-plottypes-items-properties-plotpolygon-polygon-coordinates-location.md))

### plotPolygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
