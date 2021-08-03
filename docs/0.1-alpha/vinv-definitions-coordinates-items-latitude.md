# Latitude Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/coordinates/items/1
```

The decimal north–south position of a point. (7 decimal places max)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## 1 Type

`number` ([Latitude](vinv-definitions-coordinates-items-latitude.md))

## 1 Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`
