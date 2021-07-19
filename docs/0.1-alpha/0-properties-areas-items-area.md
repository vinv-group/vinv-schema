# Area Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/properties/areas/items/0
```

Area Details


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.json\*](../../out/0.1-alpha.schema.json "open original schema") |

## 0 Type

`object` ([Area](0-properties-areas-items-area.md))

# Area Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :-------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | `array` | Optional | cannot be null | [vinv schema](0-definitions-area-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/properties/areas/items/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Polygon coordinates](0-definitions-area-definition-items-polygon-coordinates.md "check type definition")
-   cannot be null
-   defined in: [vinv schema](0-definitions-area-definition.md "https&#x3A;//raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/properties/areas/items/0/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Polygon coordinates](0-definitions-area-definition-items-polygon-coordinates.md "check type definition")

### additionalProperties Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
