# Longitude Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named-openapi.min.json#/definitions/coordinates/properties/longitude
```

The decimal east–west position of a point. (7 decimal places max)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json\*](../../0.0.1-alpha.0/openapi/vinv-named-openapi.min.json "open original schema") |

## longitude Type

`number` ([Longitude](vinv-named-openapi-definitions-coordinates-properties-longitude.md))

## longitude Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`
