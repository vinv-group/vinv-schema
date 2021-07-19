# Latitude Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/definitions/coordinates/items/1
```

The decimal north–south position of a point. (7 decimal places max)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.json\*](../../out/0.1-alpha.schema.json "open original schema") |

## 1 Type

`number` ([Latitude](0-definitions-coordinates-items-latitude.md))

## 1 Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`
