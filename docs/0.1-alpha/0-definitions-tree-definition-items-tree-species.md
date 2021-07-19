# Tree species Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.json#/definitions/tree/items/1
```

Tree Species values taken from <https://github.com/b-lack/tree-species>


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.json\*](../../out/0.1-alpha.schema.json "open original schema") |

## 1 Type

`string` ([Tree species](0-definitions-tree-definition-items-tree-species.md))

## 1 Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

## 1 Examples

```json
"JM2"
```

```json
"sf6"
```

```json
"9hD"
```

```json
"u2-"
```
