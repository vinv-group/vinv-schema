# Track definition Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/track
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## track Type

`object` ([Areas](vinv-properties-areas.md))

1.  [LineString coordinates](vinv-type-definitions-track-definition-items-linestring-coordinates.md "check type definition")
2.  [Width](vinv-type-definitions-track-definition-items-width.md "check type definition")

## track Constraints

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
