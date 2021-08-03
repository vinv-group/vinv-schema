# Track Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/tracks/items/0
```

Track Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## 0 Type

`object` ([Track](vinv-properties-tracks-items-track.md))

# Track Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                          |
| :-------------------- | ------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv](vinv-definitions-track-definition.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/tracks/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [LineString coordinates](vinv-definitions-track-definition-items-linestring-coordinates.md "check type definition")
    2.  [Width](vinv-definitions-track-definition-items-width.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-definitions-track-definition.md "https&#x3A;//schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/tracks/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [LineString coordinates](vinv-definitions-track-definition-items-linestring-coordinates.md "check type definition")
2.  [Width](vinv-definitions-track-definition-items-width.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`
