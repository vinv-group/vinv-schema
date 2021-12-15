# Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## inventory Type

`object` ([Inventory](vinv-named-openapi-properties-inventory.md))

# inventory Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [trees](#trees) | `object` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees") |
| [plots](#plots) | `object` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-plots-.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots")         |
| [areas](#areas) | `object` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas") |

## trees

Tree data & history

`trees`

*   is optional

*   Type: `object` ([Tree Inventory](vinv-named-openapi-properties-inventory-properties-tree-inventory.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees")

### trees Type

`object` ([Tree Inventory](vinv-named-openapi-properties-inventory-properties-tree-inventory.md))

## plots

Plots data

`plots`

*   is optional

*   Type: `object` ([Plots ](vinv-named-openapi-properties-inventory-properties-plots-.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-plots-.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/plots")

### plots Type

`object` ([Plots ](vinv-named-openapi-properties-inventory-properties-plots-.md))

## areas

Area data & actions

`areas`

*   is optional

*   Type: `object` ([Area Inventory](vinv-named-openapi-properties-inventory-properties-area-inventory.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas")

### areas Type

`object` ([Area Inventory](vinv-named-openapi-properties-inventory-properties-area-inventory.md))
