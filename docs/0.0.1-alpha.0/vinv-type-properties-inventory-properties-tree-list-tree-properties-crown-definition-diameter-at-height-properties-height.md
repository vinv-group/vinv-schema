# Height Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory/properties/tree_status/items/properties/crown/items/properties/height
```

Height of tree in PERCENT where diameter is measured


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## height Type

`number` ([Height](vinv-type-properties-inventory-properties-tree-list-tree-properties-crown-definition-diameter-at-height-properties-height.md))

## height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

## height Examples

```json
0.5
```

```json
0.1
```
