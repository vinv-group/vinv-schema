# Latitude Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/coordinates/properties/latitude
```

The decimal north–south position of a point. (7 decimal places max)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## latitude Type

`number` ([Latitude](vinv-named-definitions-coordinates-properties-latitude.md))

## latitude Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

## latitude Examples

```json
-12.4563
```

```json
50.5627874
```
