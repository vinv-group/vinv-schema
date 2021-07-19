# Track Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/tracks/items/0
```

Track Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.min.json\*](../../dist/0.1-alpha.schema.min.json "open original schema") |

## 0 Type

`object` ([Track](0-properties-tracks-items-track.md))

# Track Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------- | ------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv](0-definitions-track-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/tracks/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [LineString coordinates](0-definitions-track-definition-items-linestring-coordinates.md "check type definition")
    2.  [Width](0-definitions-track-definition-items-width.md "check type definition")
-   cannot be null
-   defined in: [vinv](0-definitions-track-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/tracks/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [LineString coordinates](0-definitions-track-definition-items-linestring-coordinates.md "check type definition")
2.  [Width](0-definitions-track-definition-items-width.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`
