# Images Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/definitions/tree/items/7/items
```

A universal resource identifier (URI), according to RFC3986.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.json\*](../../out/0.1-alpha.schema.json "open original schema") |

## items Type

`string` ([Images](0-definitions-images.md))

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
