# Accuracy Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/accuracy
```

The decimal accuracy of coordinates in meter (2 decimal places max).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## accuracy Type

`number` ([Accuracy](vinv-named-definitions-location-properties-accuracy.md))

## accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## accuracy Examples

```json
3
```

```json
12
```
