# Height Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/definitions/diameter_height/items/0
```

Height of tree in PERCENT where diameter is measured


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.json\*](../../out/0.1-alpha.schema.json "open original schema") |

## 0 Type

`number` ([Height](0-definitions-diameter-at-height-items-height.md))

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
