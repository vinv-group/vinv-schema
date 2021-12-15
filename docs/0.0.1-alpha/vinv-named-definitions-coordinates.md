# Coordinates Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/coordinates
```

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## coordinates Type

`object` ([Coordinates](vinv-named-definitions-coordinates.md))

## coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

# coordinates Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [longitude](#longitude) | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-longitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/longitude") |
| [latitude](#latitude)   | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-latitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/latitude")   |
| [altitude](#altitude)   | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-altitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/altitude")   |

## longitude

The decimal east–west position of a point. (7 decimal places max)

`longitude`

*   is optional

*   Type: `number` ([Longitude](vinv-named-definitions-coordinates-properties-longitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-longitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/longitude")

### longitude Type

`number` ([Longitude](vinv-named-definitions-coordinates-properties-longitude.md))

### longitude Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

### longitude Examples

```json
12.4563
```

```json
-130.5627874
```

## latitude

The decimal north–south position of a point. (7 decimal places max)

`latitude`

*   is optional

*   Type: `number` ([Latitude](vinv-named-definitions-coordinates-properties-latitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-latitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/latitude")

### latitude Type

`number` ([Latitude](vinv-named-definitions-coordinates-properties-latitude.md))

### latitude Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

### latitude Examples

```json
-12.4563
```

```json
50.5627874
```

## altitude

The altitude of the position in meters above mean sea level. (2 decimal places max)

`altitude`

*   is optional

*   Type: `number` ([\[Altitude\]](vinv-named-definitions-coordinates-properties-altitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-altitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/altitude")

### altitude Type

`number` ([\[Altitude\]](vinv-named-definitions-coordinates-properties-altitude.md))

### altitude Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### altitude Examples

```json
0
```

```json
130
```
