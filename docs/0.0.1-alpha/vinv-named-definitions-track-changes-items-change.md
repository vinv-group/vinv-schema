# Change Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/track_history/items/1
```

Date and time when change happened.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## 1 Type

`string` ([Change](vinv-named-definitions-track-changes-items-change.md))

## 1 Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## 1 Examples

```json
"2018-11-13T20:20:39+00:00"
```
