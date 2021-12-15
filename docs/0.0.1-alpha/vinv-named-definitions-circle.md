# Untitled object in vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotCircle
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## plotCircle Type

`object` ([Details](vinv-named-definitions-circle.md))

# plotCircle Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location) | `object` | Optional | cannot be null | [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/location")               |
| [radius](#radius)     | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-circle-properties-radius.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/radius") |

## location



`location`

*   is optional

*   Type: `object` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/location")

### location Type

`object` ([Location](vinv-named-definitions-location.md))

## radius

Radius in meter

`radius`

*   is optional

*   Type: `number` ([Radius](vinv-named-definitions-circle-properties-radius.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-circle-properties-radius.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/radius")

### radius Type

`number` ([Radius](vinv-named-definitions-circle-properties-radius.md))

### radius Default Value

The default value is:

```json
10
```

### radius Examples

```json
10
```

```json
15
```
