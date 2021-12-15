# Plots  Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/plots
```

Plots data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## plots Type

`object` ([Plots ](vinv-properties-inventory-properties-plots-.md))

# plots Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------ | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)       | `array` | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-plots--properties-plottypes.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/plots/properties/data")           |
| [actions](#actions) | `array` | Optional | cannot be null | [vinv](vinv-properties-inventory-properties-plots--properties-plotschangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/plots/properties/actions") |

## data

Types of plot

`data`

*   is optional

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled array in vinv](vinv-definitions-circle.md "check type definition")

    2.  [Untitled array in vinv](vinv-definitions-polygon.md "check type definition")

*   cannot be null

*   defined in: [vinv](vinv-properties-inventory-properties-plots--properties-plottypes.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/plots/properties/data")

### data Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled array in vinv](vinv-definitions-circle.md "check type definition")

2.  [Untitled array in vinv](vinv-definitions-polygon.md "check type definition")

## actions

List of plots data changed

`actions`

*   is optional

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Area Id](vinv-definitions-area-changes-items-area-id.md "check type definition")

    2.  [Change](vinv-definitions-area-changes-items-change.md "check type definition")

    3.  [Area definition](vinv-definitions-area-definition.md "check type definition")

    4.  [UserId](vinv-definitions-area-changes-items-userid.md "check type definition")

*   cannot be null

*   defined in: [vinv](vinv-properties-inventory-properties-plots--properties-plotschangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/plots/properties/actions")

### actions Type

an array where each item follows the corresponding schema in the following list:

1.  [Area Id](vinv-definitions-area-changes-items-area-id.md "check type definition")

2.  [Change](vinv-definitions-area-changes-items-change.md "check type definition")

3.  [Area definition](vinv-definitions-area-definition.md "check type definition")

4.  [UserId](vinv-definitions-area-changes-items-userid.md "check type definition")
