# Areas Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/areas
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## areas Type

`object` ([Areas](vinv-properties-areas.md))

# Areas Properties

| Property                    | Type    | Required | Nullable       | Defined by                                                                                                                                               |
| :-------------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [areaList](#arealist)       | `array` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/areas/properties/areaList")            |
| [areaHistory](#areahistory) | `array` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area-changes.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/areas/properties/areaHistory") |

## areaList

List of logical area definitions


`areaList`

-   is optional
-   Type: `object[][][][]` ([Location](vinv-definitions-location.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/areas/properties/areaList")

### areaList Type

`object[][][][]` ([Location](vinv-definitions-location.md))

## areaHistory




`areaHistory`

-   is optional
-   Type: `object[]` ([Area Changes](vinv-definitions-area-changes.md))
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area-changes.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/areas/properties/areaHistory")

### areaHistory Type

`object[]` ([Area Changes](vinv-definitions-area-changes.md))
