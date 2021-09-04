# vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json
```

Lightweight data standard for individual tree based forest management, visualisation & analytics


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [vinv-type.min.json](../../0.0.1-alpha.0/vinv-type.min.json "open original schema") |

## vinv Type

`object` ([vinv](vinv-type.md))

# vinv Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                       |
| :------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [$schema](#schema)        | `string` | Optional | cannot be null | [vinv](vinv-type-properties-schema.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/$schema")        |
| [v](#v)                   | `string` | Required | cannot be null | [vinv](vinv-type-properties-version.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/v")             |
| [id](#id)                 | `string` | Required | cannot be null | [vinv](vinv-type-properties-document-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/id")        |
| [created](#created)       | `string` | Required | cannot be null | [vinv](vinv-type-properties-created.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/created")       |
| [inventory](#inventory)   | `object` | Optional | cannot be null | [vinv](vinv-type-properties-inventory.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory")   |
| [areas](#areas)           | `object` | Optional | cannot be null | [vinv](vinv-type-properties-areas.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas")           |
| [extensions](#extensions) | `object` | Optional | cannot be null | [vinv](vinv-type-properties-extensions.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/extensions") |

## $schema




`$schema`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [vinv](vinv-type-properties-schema.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/$schema")

### $schema Type

`string`

### $schema Examples

```json
"https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json"
```

## v

Version of the used vinv schema, the file should be validated against


`v`

-   is required
-   Type: `string` ([Version](vinv-type-properties-version.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-version.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/v")

### v Type

`string` ([Version](vinv-type-properties-version.md))

### v Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9]\.[0-9]\.[0-9](-alpha\.[0-9]|-beta\.[0-9])?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%5C.%5B0-9%5D%5C.%5B0-9%5D(-alpha%5C.%5B0-9%5D%7C-beta%5C.%5B0-9%5D)%3F%24 "try regular expression with regexr.com")

### v Examples

```json
"0.0.1"
```

```json
"0.0.1-beta.0"
```

## id

Once created, this ID should never change.


`id`

-   is required
-   Type: `string` ([Document ID](vinv-type-properties-document-id.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-document-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/id")

### id Type

`string` ([Document ID](vinv-type-properties-document-id.md))

### id Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## created

Date and time this document was created.


`created`

-   is required
-   Type: `string` ([Created](vinv-type-properties-created.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-created.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/created")

### created Type

`string` ([Created](vinv-type-properties-created.md))

### created Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### created Examples

```json
"2018-11-13T20:20:39+00:00"
```

## inventory




`inventory`

-   is optional
-   Type: `object` ([Inventory](vinv-type-properties-inventory.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-inventory.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/inventory")

### inventory Type

`object` ([Inventory](vinv-type-properties-inventory.md))

## areas




`areas`

-   is optional
-   Type: `object` ([Areas](vinv-type-properties-areas.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-areas.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/areas")

### areas Type

`object` ([Areas](vinv-type-properties-areas.md))

## extensions

List of functional extensions


`extensions`

-   is optional
-   Type: `object` ([Extensions](vinv-type-properties-extensions.md))
-   cannot be null
-   defined in: [vinv](vinv-type-properties-extensions.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/properties/extensions")

### extensions Type

`object` ([Extensions](vinv-type-properties-extensions.md))

# vinv Definitions

## Definitions group tree

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :-------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)           | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/id")                         |
| [location](#location) | `object` | Required | cannot be null | [vinv](vinv-type-definitions-tree-properties-location.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/location")             |
| [species](#species)   | `string` | Required | cannot be null | [vinv](vinv-type-definitions-tree-properties-tree-species.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/species")          |
| [dbh](#dbh)           | `number` | Required | cannot be null | [vinv](vinv-type-definitions-tree-properties-diameter-at-breast-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/dbh") |
| [height](#height)     | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/height")                 |
| [trunk](#trunk)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-trunk-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/trunk")        |
| [crown](#crown)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-crown-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/crown")        |
| [birth](#birth)       | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-birthday.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/birth")                |
| [image](#image)       | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-tree-properties-images.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/image")                  |

### id




`id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/id")

#### id Type

`string`

#### id Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

### location




`location`

-   is required
-   Type: `object` ([Location](vinv-type-definitions-tree-properties-location.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-location.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/location")

#### location Type

`object` ([Location](vinv-type-definitions-tree-properties-location.md))

### species

Tree Species values taken from <https://github.com/b-lack/tree-species>


`species`

-   is required
-   Type: `string` ([Tree species](vinv-type-definitions-tree-properties-tree-species.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-tree-species.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/species")

#### species Type

`string` ([Tree species](vinv-type-definitions-tree-properties-tree-species.md))

#### species Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24 "try regular expression with regexr.com")

### dbh

Diameter in centimeter


`dbh`

-   is required
-   Type: `number` ([Diameter at Breast Height](vinv-type-definitions-tree-properties-diameter-at-breast-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-diameter-at-breast-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/dbh")

#### dbh Type

`number` ([Diameter at Breast Height](vinv-type-definitions-tree-properties-diameter-at-breast-height.md))

#### dbh Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### height

Height in centimeter


`height`

-   is optional
-   Type: `number` ([Height](vinv-type-definitions-tree-properties-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/height")

#### height Type

`number` ([Height](vinv-type-definitions-tree-properties-height.md))

#### height Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `10`

### trunk

Diameter per height


`trunk`

-   is optional
-   Type: `object[]` ([Diameter at height](vinv-type-definitions-tree-properties-trunk-definition-diameter-at-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-trunk-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/trunk")

#### trunk Type

`object[]` ([Diameter at height](vinv-type-definitions-tree-properties-trunk-definition-diameter-at-height.md))

#### trunk Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### crown

Diameter per height


`crown`

-   is optional
-   Type: `object[]` ([Diameter at height](vinv-type-definitions-tree-properties-crown-definition-diameter-at-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-crown-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/crown")

#### crown Type

`object[]` ([Diameter at height](vinv-type-definitions-tree-properties-crown-definition-diameter-at-height.md))

#### crown Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### birth

Birthday of the tree


`birth`

-   is optional
-   Type: `string` ([Birthday](vinv-type-definitions-tree-properties-birthday.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-birthday.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/birth")

#### birth Type

`string` ([Birthday](vinv-type-definitions-tree-properties-birthday.md))

#### birth Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### image

List of absolute or relative path to file


`image`

-   is optional
-   Type: `string[]` ([Images](vinv-type-definitions-tree-properties-images-images.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-properties-images.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/tree/properties/image")

#### image Type

`string[]` ([Images](vinv-type-definitions-tree-properties-images-images.md))

## Definitions group trees_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-2)               | `string` | Required | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/id")               |
| [changedAt](#changedat)   | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-time-of-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/changedAt") |
| [definition](#definition) | `object` | Required | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-tree.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition")          |
| [uId](#uid)               | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-tree-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/uId")               |

### id

URL-friendly id


`id`

-   is required
-   Type: `string` ([Tree Id](vinv-type-definitions-tree-changes-properties-tree-id.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/id")

#### id Type

`string` ([Tree Id](vinv-type-definitions-tree-changes-properties-tree-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

### changedAt

Date and time when change happened.


`changedAt`

-   is optional
-   Type: `string` ([Time of Change](vinv-type-definitions-tree-changes-properties-time-of-change.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-time-of-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/changedAt")

#### changedAt Type

`string` ([Time of Change](vinv-type-definitions-tree-changes-properties-time-of-change.md))

#### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### changedAt Examples

```json
"2018-11-13T20:20:39+00:00"
```

### definition

Tree definition


`definition`

-   is required
-   Type: `object` ([Tree](vinv-type-definitions-tree-changes-properties-tree.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-tree.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/definition")

#### definition Type

`object` ([Tree](vinv-type-definitions-tree-changes-properties-tree.md))

### uId




`uId`

-   is optional
-   Type: `string` ([UserId](vinv-type-definitions-tree-changes-properties-userid.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-tree-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/trees_history/properties/uId")

#### uId Type

`string` ([UserId](vinv-type-definitions-tree-changes-properties-userid.md))

#### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## Definitions group track

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/track"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group track_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/track_history"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group area

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group area_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-3)                 | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-area-changes-properties-track-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/id")                |
| [changedAt](#changedat-1)   | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-area-changes-properties-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/changedAt")           |
| [definition](#definition-1) | `array`  | Optional | cannot be null | [vinv](vinv-type-definitions-area-changes-properties-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/definition") |
| [uId](#uid-1)               | `string` | Optional | cannot be null | [vinv](vinv-type-definitions-area-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/uId")                 |

### id

URL-friendly id


`id`

-   is optional
-   Type: `string` ([Track Id](vinv-type-definitions-area-changes-properties-track-id.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-changes-properties-track-id.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/id")

#### id Type

`string` ([Track Id](vinv-type-definitions-area-changes-properties-track-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D*%24 "try regular expression with regexr.com")

### changedAt

Date and time when change happened.


`changedAt`

-   is optional
-   Type: `string` ([Change](vinv-type-definitions-area-changes-properties-change.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-changes-properties-change.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/changedAt")

#### changedAt Type

`string` ([Change](vinv-type-definitions-area-changes-properties-change.md))

#### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### changedAt Examples

```json
"2018-11-13T20:20:39+00:00"
```

### definition




`definition`

-   is optional
-   Type: `object[][][]` ([Location](vinv-type-definitions-area-changes-properties-area-definition-polygon-coordinates-polygon-coordinates-location.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-changes-properties-area-definition.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/definition")

#### definition Type

`object[][][]` ([Location](vinv-type-definitions-area-changes-properties-area-definition-polygon-coordinates-polygon-coordinates-location.md))

#### definition Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

### uId




`uId`

-   is optional
-   Type: `string` ([UserId](vinv-type-definitions-area-changes-properties-userid.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-area-changes-properties-userid.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/area_history/properties/uId")

#### uId Type

`string` ([UserId](vinv-type-definitions-area-changes-properties-userid.md))

#### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## Definitions group location

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/location"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :-------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [vinv](vinv-type-definitions-location-properties-coordinates.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/location/properties/coordinates") |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/location/properties/accuracy")       |

### coordinates

Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.


`coordinates`

-   is required
-   Type: `object` ([Coordinates](vinv-type-definitions-location-properties-coordinates.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-location-properties-coordinates.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/location/properties/coordinates")

#### coordinates Type

`object` ([Coordinates](vinv-type-definitions-location-properties-coordinates.md))

#### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

### accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).


`accuracy`

-   is optional
-   Type: `number` ([Accuracy](vinv-type-definitions-location-properties-accuracy.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-location-properties-accuracy.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/location/properties/accuracy")

#### accuracy Type

`number` ([Accuracy](vinv-type-definitions-location-properties-accuracy.md))

#### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Definitions group coordinates

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                     |
| :---------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [longitude](#longitude) | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-coordinates-properties-longitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/longitude") |
| [latitude](#latitude)   | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-coordinates-properties-latitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/latitude")   |
| [altitude](#altitude)   | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-coordinates-properties-altitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/altitude")   |

### longitude

The decimal east–west position of a point. (7 decimal places max)


`longitude`

-   is optional
-   Type: `number` ([Longitude](vinv-type-definitions-coordinates-properties-longitude.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-coordinates-properties-longitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/longitude")

#### longitude Type

`number` ([Longitude](vinv-type-definitions-coordinates-properties-longitude.md))

#### longitude Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

### latitude

The decimal north–south position of a point. (7 decimal places max)


`latitude`

-   is optional
-   Type: `number` ([Latitude](vinv-type-definitions-coordinates-properties-latitude.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-coordinates-properties-latitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/latitude")

#### latitude Type

`number` ([Latitude](vinv-type-definitions-coordinates-properties-latitude.md))

#### latitude Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

### altitude

The altitude of the position in meters above mean sea level. (2 decimal places max)


`altitude`

-   is optional
-   Type: `number` ([\[Altitude\]](vinv-type-definitions-coordinates-properties-altitude.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-coordinates-properties-altitude.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/coordinates/properties/altitude")

#### altitude Type

`number` ([\[Altitude\]](vinv-type-definitions-coordinates-properties-altitude.md))

#### altitude Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Definitions group dbh

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/dbh"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group species

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/species"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group dimensions_trunk

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/dimensions_trunk"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group dimensions_crown

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/dimensions_crown"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group diameter_height

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/diameter_height"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height-1)   | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-diameter-at-height-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/diameter_height/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [vinv](vinv-type-definitions-diameter-at-height-properties-diameter.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/diameter_height/properties/diameter") |

### height

Height of tree in PERCENT where diameter is measured


`height`

-   is optional
-   Type: `number` ([Height](vinv-type-definitions-diameter-at-height-properties-height.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-diameter-at-height-properties-height.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/diameter_height/properties/height")

#### height Type

`number` ([Height](vinv-type-definitions-diameter-at-height-properties-height.md))

#### height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

#### height Examples

```json
0.5
```

```json
0.1
```

### diameter

Diameter in CENTIMETER at measured height


`diameter`

-   is optional
-   Type: `number` ([Diameter](vinv-type-definitions-diameter-at-height-properties-diameter.md))
-   cannot be null
-   defined in: [vinv](vinv-type-definitions-diameter-at-height-properties-diameter.md "https&#x3A;//schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/diameter_height/properties/diameter")

#### diameter Type

`number` ([Diameter](vinv-type-definitions-diameter-at-height-properties-diameter.md))

#### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0.1`

## Definitions group filter

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/filter"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |

## Definitions group image

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha.0/vinv-type.min.json#/definitions/image"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | ---- | -------- | -------- | :--------- |
