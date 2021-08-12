# Height Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/definitions/diameter_height/items/0
```

Height of tree in PERCENT where diameter is measured


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## 0 Type

`number` ([Height](vinv-definitions-diameter-at-height-items-height.md))

## 0 Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

## 0 Examples

```json
0.5
```

```json
0.1
```
