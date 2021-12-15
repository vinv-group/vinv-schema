# Track Id Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/track_history/items/0
```

URL-friendly id

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## 0 Type

`string` ([Track Id](vinv-named-definitions-track-changes-items-track-id.md))

## 0 Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D\*%24 "try regular expression with regexr.com")

## 0 Examples

```json
"FJet9-q0pzhhPhi4vw4M-0qMZ0FtQ5r1VLTR"
```
