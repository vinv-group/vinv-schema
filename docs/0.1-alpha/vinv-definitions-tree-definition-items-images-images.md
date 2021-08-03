# Images Schema

```txt
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/tree/items/7/items
```

A universal resource identifier (URI), according to RFC3986.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |

## items Type

`string` ([Images](vinv-definitions-tree-definition-items-images-images.md))

## items Constraints

**pattern**: the string must match the following regular expression: 

```regexp
uri
```

[try pattern](https://regexr.com/?expression=uri "try regular expression with regexr.com")

## items Examples

```json
"https://via.placeholder.com/150.png"
```

```json
"https://via.placeholder.com/400x300.png"
```

```json
"https://via.placeholder.com/450x800.png"
```
