# Plots Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## plots Type

`object` ([Plots](vinv-properties-areas-properties-plots.md))

# Plots Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------- | ------ | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [vinv](vinv-definitions-plot.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:




-   is optional
-   Type: merged type ([Plot](vinv-definitions-plot.md))
-   cannot be null
-   defined in: [vinv](vinv-definitions-plot.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/areas/properties/plots/additionalProperties")

### additionalProperties Type

merged type ([Plot](vinv-definitions-plot.md))

one (and only one) of

-   [Circle](vinv-definitions-circle.md "check type definition")
-   [Area definition](vinv-definitions-area-definition.md "check type definition")
