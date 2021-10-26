# Areas Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/areas
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## areas Type

`object` ([Areas](vinv-named-properties-areas.md))

# Areas Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                    |
| :---------------------------- | ------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [area_status](#area_status)   | `array` | Optional | cannot be null | [vinv](vinv-named-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/areas/properties/area_status")          |
| [area_history](#area_history) | `array` | Optional | cannot be null | [vinv](vinv-named-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/areas/properties/area_history") |

## area_status

Area Details


`area_status`

-   is optional
-   Type: `object[][][][]` ([Location](vinv-named-definitions-location.md))
-   cannot be null
-   defined in: [vinv](vinv-named-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/areas/properties/area_status")

### area_status Type

`object[][][][]` ([Location](vinv-named-definitions-location.md))

## area_history




`area_history`

-   is optional
-   Type: `object[]` ([Area Changes](vinv-named-definitions-area-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-named-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/properties/areas/properties/area_history")

### area_history Type

`object[]` ([Area Changes](vinv-named-definitions-area-changes.md))
