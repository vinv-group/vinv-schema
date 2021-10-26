# Diameter at height Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/tree/properties/crown/items
```

Array including height and diameter at height


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## items Type

`object` ([Diameter at height](vinv-named-definitions-diameter-at-height.md))

## items Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

# Diameter at height Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height)     | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-diameter-at-height-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/diameter_height/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-diameter-at-height-properties-diameter.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/diameter_height/properties/diameter") |

## height

Height of tree in PERCENT where diameter is measured


`height`

-   is optional
-   Type: `number` ([Height](vinv-named-definitions-diameter-at-height-properties-height.md))
-   cannot be null
-   defined in: [vinv](vinv-named-definitions-diameter-at-height-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/diameter_height/properties/height")

### height Type

`number` ([Height](vinv-named-definitions-diameter-at-height-properties-height.md))

### height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

### height Examples

```json
0.5
```

```json
0.1
```

## diameter

Diameter in CENTIMETER at measured height


`diameter`

-   is optional
-   Type: `number` ([Diameter](vinv-named-definitions-diameter-at-height-properties-diameter.md))
-   cannot be null
-   defined in: [vinv](vinv-named-definitions-diameter-at-height-properties-diameter.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/diameter_height/properties/diameter")

### diameter Type

`number` ([Diameter](vinv-named-definitions-diameter-at-height-properties-diameter.md))

### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `10`

### diameter Examples

```json
34
```

```json
38
```
