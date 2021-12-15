# Plots  Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots
```

Plots data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## plots Type

`object` ([Plots ](vinv-named-properties-inventory-properties-plots-.md))

# plots Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :------------------ | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data)       | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-plots--properties-plottypes.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots/properties/data")           |
| [actions](#actions) | `array` | Optional | cannot be null | [vinv](vinv-named-properties-inventory-properties-plots--properties-plotschangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots/properties/actions") |

## data

Types of plot

`data`

*   is optional

*   Type: `object[]` ([Details](vinv-named-definitions-plottypes.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-inventory-properties-plots--properties-plottypes.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots/properties/data")

### data Type

`object[]` ([Details](vinv-named-definitions-plottypes.md))

## actions

List of plots data changed

`actions`

*   is optional

*   Type: `object[]` ([Area Changes](vinv-named-definitions-area-changes.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-inventory-properties-plots--properties-plotschangeslist.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/plots/properties/actions")

### actions Type

`object[]` ([Area Changes](vinv-named-definitions-area-changes.md))
