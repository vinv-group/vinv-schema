# Areas Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## areas Type

`object` ([Areas](vinv-properties-areas.md))

# Areas Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [area_status](#area_status)   | `object` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_status")          |
| [plots](#plots)               | `object` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-plots.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots")                    |
| [area_history](#area_history) | `array`  | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_history") |

## area_status

Area Details


`area_status`

-   is optional
-   Type: `object` ([Area List](vinv-properties-areas-properties-area-list.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_status")

### area_status Type

`object` ([Area List](vinv-properties-areas-properties-area-list.md))

## plots




`plots`

-   is optional
-   Type: `object` ([Plots](vinv-properties-areas-properties-plots.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-plots.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots")

### plots Type

`object` ([Plots](vinv-properties-areas-properties-plots.md))

## area_history




`area_history`

-   is optional
-   Type: `object[]` ([Area Changes](vinv-definitions-area-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_history")

### area_history Type

`object[]` ([Area Changes](vinv-definitions-area-changes.md))
