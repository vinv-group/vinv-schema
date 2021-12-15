# Accuracy Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/definitions/location/items/1
```

The decimal accuracy of coordinates in meter (2 decimal places max).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## 1 Type

`number` ([Accuracy](vinv-definitions-location-items-accuracy.md))

## 1 Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## 1 Examples

```json
3
```

```json
12
```
