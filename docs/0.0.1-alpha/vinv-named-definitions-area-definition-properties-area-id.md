# Area Id Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/id
```

Unique identifying ID String

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## id Type

`string` ([Area Id](vinv-named-definitions-area-definition-properties-area-id.md))

## id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```
