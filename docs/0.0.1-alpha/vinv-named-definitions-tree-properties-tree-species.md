# Tree species Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/species
```

Tree Species values taken from <https://github.com/b-lack/tree-species>

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## species Type

`string` ([Tree species](vinv-named-definitions-tree-properties-tree-species.md))

## species Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_-%5D%7B3%7D%24 "try regular expression with regexr.com")

## species Examples

```json
"JM2"
```
