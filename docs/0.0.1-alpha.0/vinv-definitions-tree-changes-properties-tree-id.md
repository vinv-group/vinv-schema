# Tree Id Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/definitions/trees_history/properties/id
```

URL-friendly id


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |

## id Type

`string` ([Tree Id](vinv-definitions-tree-changes-properties-tree-id.md))

## id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## id Examples

```json
"5ifq8QepMG_kSfuj6fKVBMynxNbRLN2tBKvF"
```

```json
"8ETHsYK6eJcEn79HegkqCESvaAvQGr_qchRW"
```
