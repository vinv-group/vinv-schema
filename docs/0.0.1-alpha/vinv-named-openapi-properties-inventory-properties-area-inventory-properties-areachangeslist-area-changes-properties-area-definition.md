# Area definition Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas/properties/actions/items/properties/definition
```

Area definition

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## definition Type

`object` ([Area definition](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition.md))

# definition Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                   |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)           | `string` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas/properties/actions/items/properties/definition/properties/id")      |
| [polygon](#polygon) | `array`  | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas/properties/actions/items/properties/definition/properties/polygon") |

## id

Unique identifying ID String

`id`

*   is optional

*   Type: `string` ([Area Id](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-area-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas/properties/actions/items/properties/definition/properties/id")

### id Type

`string` ([Area Id](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-area-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## polygon



`polygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-polygon-polygon-coordinates-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/areas/properties/actions/items/properties/definition/properties/polygon")

### polygon Type

`object[][]` ([Location](vinv-named-openapi-properties-inventory-properties-area-inventory-properties-areachangeslist-area-changes-properties-area-definition-properties-polygon-polygon-coordinates-location.md))

### polygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
