# UserId Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/area_history/properties/uId
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## uId Type

`string` ([UserId](vinv-named-definitions-area-changes-properties-userid.md))

## uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## uId Examples

```json
"FJet9-q0pzhhPhi4vw4M-0qMZ0FtQ5r1VLTR"
```
