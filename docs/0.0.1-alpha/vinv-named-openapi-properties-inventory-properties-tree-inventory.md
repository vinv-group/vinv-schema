# Tree Inventory Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees
```

Tree data & history

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## trees Type

`object` ([Tree Inventory](vinv-named-openapi-properties-inventory-properties-tree-inventory.md))

# trees Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                         |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)       | `object` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/data")           |
| [actions](#actions) | `array`  | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions") |

## data

List of trees defined

`data`

*   is optional

*   Type: `object` ([TreeList](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/data")

### data Type

`object` ([TreeList](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist.md))

## actions

List of tree data changed

`actions`

*   is optional

*   Type: `object[]` ([Tree Changes](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions")

### actions Type

`object[]` ([Tree Changes](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes.md))
