# Plots Circle Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotCircle
```

List of plots (Location, Distance)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## plotCircle Type

`object` ([Plots Circle](vinv-properties-areas-properties-plots-properties-plots-circle.md))

# Plots Circle Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                 |
| :-------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | `array` | Optional | cannot be null | [vinv](vinv-definitions-circle.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotCircle/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:

Definition of geo circle by location and radius in meter


-   is optional
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Location](vinv-definitions-location.md "check type definition")
    2.  [Maximal distance from center location in meter](vinv-definitions-circle-items-maximal-distance-from-center-location-in-meter.md "check type definition")
-   cannot be null
-   defined in: [vinv](vinv-definitions-circle.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/properties/plotCircle/additionalProperties")

### additionalProperties Type

an array where each item follows the corresponding schema in the following list:

1.  [Location](vinv-definitions-location.md "check type definition")
2.  [Maximal distance from center location in meter](vinv-definitions-circle-items-maximal-distance-from-center-location-in-meter.md "check type definition")

### additionalProperties Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
