# Plots Polygon Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotPolygon
```

List of plots (Polygon)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## plotPolygon Type

`object` ([Plots Polygon](vinv-properties-areas-properties-plots-properties-plots-polygon.md))

# Plots Polygon Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------------- | ------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv](vinv-definitions-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotPolygon/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Polygon coordinates](vinv-definitions-area-definition-items-polygon-coordinates.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-definitions-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotPolygon/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Polygon coordinates](vinv-definitions-area-definition-items-polygon-coordinates.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `1`

**minimum number of items**: the minimum number of items for this array is: `1`
