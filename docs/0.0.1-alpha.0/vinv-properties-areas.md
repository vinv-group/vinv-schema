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

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------- | ------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [area_status](#area_status)   | `array` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_status")          |
| [area_history](#area_history) | `array` | Optional | cannot be null | [vinv](vinv-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_history") |

## area_status

Area Details


`area_status`

-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Polygon coordinates](vinv-definitions-area-definition-items-polygon-coordinates.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_status")

### area_status Type

an array where each item follows the corresponding schema in the following list:

1.  [Polygon coordinates](vinv-definitions-area-definition-items-polygon-coordinates.md "check type definition")

## area_history




`area_history`

-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Track Id](vinv-definitions-area-changes-items-track-id.md "check type definition")
    2.  [Change](vinv-definitions-area-changes-items-change.md "check type definition")
    3.  [Area definition](vinv-definitions-area-definition.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-properties-areas-properties-area-changes-list.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/area_history")

### area_history Type

an array where each item follows the corresponding schema in the following list:

1.  [Track Id](vinv-definitions-area-changes-items-track-id.md "check type definition")
2.  [Change](vinv-definitions-area-changes-items-change.md "check type definition")
3.  [Area definition](vinv-definitions-area-definition.md "check type definition")
