# Area Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/areas
```

Area data & actions

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## areas Type

`object` ([Area Inventory](vinv-named-properties-inventory-properties-area-inventory.md))

# areas Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :------------------ | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)       | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-area-inventory-properties-arealist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/areas/properties/data")           |
| [actions](#actions) | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-area-inventory-properties-areachangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/areas/properties/actions") |

## data

List of areas defined

`data`

*   is optional

*   Type: `object[]` ([Area definition](vinv-named-definitions-area-definition.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-inventory-properties-area-inventory-properties-arealist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/areas/properties/data")

### data Type

`object[]` ([Area definition](vinv-named-definitions-area-definition.md))

## actions

List of area data changed

`actions`

*   is optional

*   Type: `object[]` ([Area Changes](vinv-named-definitions-area-changes.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-inventory-properties-area-inventory-properties-areachangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/areas/properties/actions")

### actions Type

`object[]` ([Area Changes](vinv-named-definitions-area-changes.md))
