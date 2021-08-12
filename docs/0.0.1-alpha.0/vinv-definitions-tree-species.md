# Tree species Schema

```txt
<<<<<<< HEAD:docs/0.0.1-alpha.0/vinv-definitions-tree-species.md
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/definitions/tree/items/1
=======
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/definitions/tree/properties/species
>>>>>>> main:docs/0.1-alpha/vinv-definitions-tree-species.md
```

Tree Species values taken from <https://github.com/b-lack/tree-species>


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

<<<<<<< HEAD:docs/0.0.1-alpha.0/vinv-definitions-tree-species.md
## 1 Type

`string` ([Tree species](vinv-definitions-tree-species.md))

## 1 Constraints
=======
## species Type

`string` ([Tree species](vinv-definitions-tree-species.md))

## species Constraints
>>>>>>> main:docs/0.1-alpha/vinv-definitions-tree-species.md

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")
<<<<<<< HEAD:docs/0.0.1-alpha.0/vinv-definitions-tree-species.md

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
=======
>>>>>>> main:docs/0.1-alpha/vinv-definitions-tree-species.md
