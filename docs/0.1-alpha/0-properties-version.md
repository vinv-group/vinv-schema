# Version Schema

```txt
https://raw.githubusercontent.com/vinv-group/vinv-schema/documentation/dist/0.1-alpha.schema.min.json#/properties/v
```

Version of the used vinv schema, the file should be validated against


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [0.1-alpha.schema.min.json\*](../../dist/0.1-alpha.schema.min.json "open original schema") |

## v Type

`string` ([Version](0-properties-version.md))

## v Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9]\.[0-9](-alpha|-beta|-stable)?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%5C.%5B0-9%5D(-alpha%7C-beta%7C-stable)%3F%24 "try regular expression with regexr.com")

## v Examples

```json
"0.1"
```

```json
"0.1-beta"
```
