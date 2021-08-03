# Longitude Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/coordinates/items/0
```

The decimal east–west position of a point. (7 decimal places max)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## 0 Type

`number` ([Longitude](vinv-definitions-coordinates-items-longitude.md))

## 0 Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`
