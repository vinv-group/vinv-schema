# Images Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/image/items
```

A universal resource identifier (URI), according to RFC3986.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## items Type

`string` ([Images](vinv-named-definitions-tree-properties-images-images.md))

## items Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## items Examples

```json
"https://via.placeholder.com/150"
```

```json
"https://via.placeholder.com/728x90.png"
```

```json
"https://via.placeholder.com/90x728.jpg"
```
