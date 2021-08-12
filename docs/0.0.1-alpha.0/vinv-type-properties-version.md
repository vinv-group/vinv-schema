# Version Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/v
```

Version of the used vinv schema, the file should be validated against


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-type.min.json\*](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## v Type

`string` ([Version](vinv-type-properties-version.md))

## v Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9]\.[0-9]\.[0-9](-alpha\.[0-9]|-beta\.[0-9])?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%5C.%5B0-9%5D%5C.%5B0-9%5D(-alpha%5C.%5B0-9%5D%7C-beta%5C.%5B0-9%5D)%3F%24 "try regular expression with regexr.com")

## v Examples

```json
"0.0.1"
```

```json
"0.0.1-beta.0"
```
