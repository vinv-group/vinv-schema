# vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json
```

Lightweight data standard for individual tree based forest management, visualisation & analytics

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [vinv-named.min.json](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## vinv Type

`object` ([vinv](vinv-named.md))

# vinv Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [v](#v)                 | `string` | Required | cannot be null | [vinv](vinv-named-properties-version.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/v")           |
| [id](#id)               | `string` | Required | cannot be null | [vinv](vinv-named-properties-document-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/id")      |
| [created](#created)     | `string` | Required | cannot be null | [vinv](vinv-named-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/created")     |
| [$schema](#schema)      | `string` | Optional | cannot be null | [vinv](vinv-named-properties-schema.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/$schema")      |
| [inventory](#inventory) | `object` | Optional | cannot be null | [vinv](vinv-named-properties-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory") |

## v

Version of the used vinv schema, the file should be validated against

`v`

*   is required

*   Type: `string` ([Version](vinv-named-properties-version.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-version.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/v")

### v Type

`string` ([Version](vinv-named-properties-version.md))

### v Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[0-9]\.[0-9]\.[0-9](-alpha|-beta)?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%5C.%5B0-9%5D%5C.%5B0-9%5D\(-alpha%7C-beta\)%3F%24 "try regular expression with regexr.com")

### v Examples

```json
"0.0.1-alpha"
```

## id

Once created, this ID should never change.

`id`

*   is required

*   Type: `string` ([Document ID](vinv-named-properties-document-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-document-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/id")

### id Type

`string` ([Document ID](vinv-named-properties-document-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

### id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

## created

Date and time this document was created.

`created`

*   is required

*   Type: `string` ([Created](vinv-named-properties-created.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/created")

### created Type

`string` ([Created](vinv-named-properties-created.md))

### created Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### created Examples

```json
"2018-11-13T20:20:39+00:00"
```

## $schema



`$schema`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [vinv](vinv-named-properties-schema.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/$schema")

### $schema Type

`string`

### $schema Examples

```json
"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json"
```

## inventory



`inventory`

*   is optional

*   Type: `object` ([Inventory](vinv-named-properties-inventory.md))

*   cannot be null

*   defined in: [vinv](vinv-named-properties-inventory.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory")

### inventory Type

`object` ([Inventory](vinv-named-properties-inventory.md))

# vinv Definitions

## Definitions group tree

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)           | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-tree-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/id")                    |
| [location](#location) | `object` | Required | cannot be null | [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/location")                             |
| [species](#species)   | `string` | Required | cannot be null | [vinv](vinv-named-definitions-tree-properties-tree-species.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/species")          |
| [dbh](#dbh)           | `number` | Required | cannot be null | [vinv](vinv-named-definitions-tree-properties-diameter-at-breast-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/dbh") |
| [height](#height)     | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-tree-properties-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/height")                 |
| [trunk](#trunk)       | `array`  | Optional | cannot be null | [vinv](vinv-named-definitions-additional-trunk-measurements.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/trunk")           |
| [crown](#crown)       | `array`  | Optional | cannot be null | [vinv](vinv-named-definitions-additional-crown-measurements.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/crown")           |
| [birth](#birth)       | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-tree-properties-birthday.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/birth")                |
| [image](#image)       | `array`  | Optional | cannot be null | [vinv](vinv-named-definitions-tree-properties-images.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/image")                  |

### id

Unique identifying ID String

`id`

*   is optional

*   Type: `string` ([Tree Id](vinv-named-definitions-tree-properties-tree-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/id")

#### id Type

`string` ([Tree Id](vinv-named-definitions-tree-properties-tree-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

### location



`location`

*   is required

*   Type: `object` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/location")

#### location Type

`object` ([Location](vinv-named-definitions-location.md))

### species

Tree Species values taken from <https://github.com/b-lack/tree-species>

`species`

*   is required

*   Type: `string` ([Tree species](vinv-named-definitions-tree-properties-tree-species.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-tree-species.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/species")

#### species Type

`string` ([Tree species](vinv-named-definitions-tree-properties-tree-species.md))

#### species Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z0-9_-]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9\_-%5D%7B3%7D%24 "try regular expression with regexr.com")

#### species Examples

```json
"JM2"
```

### dbh

Diameter in centimeter

`dbh`

*   is required

*   Type: `number` ([Diameter at Breast Height](vinv-named-definitions-tree-properties-diameter-at-breast-height.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-diameter-at-breast-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/dbh")

#### dbh Type

`number` ([Diameter at Breast Height](vinv-named-definitions-tree-properties-diameter-at-breast-height.md))

#### dbh Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

#### dbh Examples

```json
34
```

```json
56
```

### height

Height in centimeter

`height`

*   is optional

*   Type: `number` ([Height](vinv-named-definitions-tree-properties-height.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/height")

#### height Type

`number` ([Height](vinv-named-definitions-tree-properties-height.md))

#### height Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `10`

#### height Examples

```json
134
```

```json
156
```

### trunk

Diameter per height

`trunk`

*   is optional

*   Type: `object[]` ([Diameter at height](vinv-named-definitions-diameter-at-height.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-additional-trunk-measurements.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/trunk")

#### trunk Type

`object[]` ([Diameter at height](vinv-named-definitions-diameter-at-height.md))

#### trunk Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### crown

Diameter per height

`crown`

*   is optional

*   Type: `object[]` ([Diameter at height](vinv-named-definitions-diameter-at-height.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-additional-crown-measurements.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/crown")

#### crown Type

`object[]` ([Diameter at height](vinv-named-definitions-diameter-at-height.md))

#### crown Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### birth

Birthday of the tree

`birth`

*   is optional

*   Type: `string` ([Birthday](vinv-named-definitions-tree-properties-birthday.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-birthday.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/birth")

#### birth Type

`string` ([Birthday](vinv-named-definitions-tree-properties-birthday.md))

#### birth Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### birth Examples

```json
"2010-09-13"
```

### image

List of absolute or relative path to file

`image`

*   is optional

*   Type: `string[]` ([Images](vinv-named-definitions-tree-properties-images-images.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-properties-images.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/tree/properties/image")

#### image Type

`string[]` ([Images](vinv-named-definitions-tree-properties-images-images.md))

## Definitions group trees_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                        |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-2)               | `string` | Required | cannot be null | [vinv](vinv-named-definitions-tree-changes-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/id")               |
| [changedAt](#changedat)   | `string` | Required | cannot be null | [vinv](vinv-named-definitions-tree-changes-properties-time-of-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/changedAt") |
| [definition](#definition) | `object` | Required | cannot be null | [vinv](vinv-named-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/definition")                                  |
| [uId](#uid)               | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-tree-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/uId")               |

### id

URL-friendly id

`id`

*   is required

*   Type: `string` ([Tree Id](vinv-named-definitions-tree-changes-properties-tree-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-changes-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/id")

#### id Type

`string` ([Tree Id](vinv-named-definitions-tree-changes-properties-tree-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### id Examples

```json
"5ifq8QepMG_kSfuj6fKVBMynxNbRLN2tBKvF"
```

```json
"8ETHsYK6eJcEn79HegkqCESvaAvQGr_qchRW"
```

### changedAt

Date and time when change happened.

`changedAt`

*   is required

*   Type: `string` ([Time of Change](vinv-named-definitions-tree-changes-properties-time-of-change.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-changes-properties-time-of-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/changedAt")

#### changedAt Type

`string` ([Time of Change](vinv-named-definitions-tree-changes-properties-time-of-change.md))

#### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### changedAt Examples

```json
"2018-11-13T20:20:39+00:00"
```

### definition

Tree definition

`definition`

*   is required

*   Type: `object` ([Tree](vinv-named-definitions-tree.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/definition")

#### definition Type

`object` ([Tree](vinv-named-definitions-tree.md))

### uId



`uId`

*   is optional

*   Type: `string` ([UserId](vinv-named-definitions-tree-changes-properties-userid.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/trees_history/properties/uId")

#### uId Type

`string` ([UserId](vinv-named-definitions-tree-changes-properties-userid.md))

#### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### uId Examples

```json
"FJet9-q0pzhhPhi4vw4M-0qMZ0FtQ5r1VLTR"
```

## Definitions group track

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/track"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group track_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/track_history"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group area

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id-3)         | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-area-definition-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/id") |
| [polygon](#polygon) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/polygon")                       |

### id

Unique identifying ID String

`id`

*   is optional

*   Type: `string` ([Area Id](vinv-named-definitions-area-definition-properties-area-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-area-definition-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/id")

#### id Type

`string` ([Area Id](vinv-named-definitions-area-definition-properties-area-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

### polygon



`polygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area/properties/polygon")

#### polygon Type

`object[][]` ([Location](vinv-named-definitions-location.md))

#### polygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## Definitions group area_history

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-4)                 | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-area-changes-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/id")       |
| [changedAt](#changedat-1)   | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-area-changes-properties-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/changedAt") |
| [definition](#definition-1) | `object` | Optional | cannot be null | [vinv](vinv-named-definitions-area-definition.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/definition")               |
| [uId](#uid-1)               | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-area-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/uId")       |

### id

URL-friendly id

`id`

*   is optional

*   Type: `string` ([Area Id](vinv-named-definitions-area-changes-properties-area-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-area-changes-properties-area-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/id")

#### id Type

`string` ([Area Id](vinv-named-definitions-area-changes-properties-area-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D\*%24 "try regular expression with regexr.com")

#### id Examples

```json
"ZUMLoqZeuWdYCtHBWTOexYvGl1NDTlp4yacX"
```

### changedAt

Date and time when change happened.

`changedAt`

*   is optional

*   Type: `string` ([Change](vinv-named-definitions-area-changes-properties-change.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-area-changes-properties-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/changedAt")

#### changedAt Type

`string` ([Change](vinv-named-definitions-area-changes-properties-change.md))

#### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### changedAt Examples

```json
"2018-11-13T20:20:39+00:00"
```

### definition

Area definition

`definition`

*   is optional

*   Type: `object` ([Area definition](vinv-named-definitions-area-definition.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-area-definition.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/definition")

#### definition Type

`object` ([Area definition](vinv-named-definitions-area-definition.md))

### uId



`uId`

*   is optional

*   Type: `string` ([UserId](vinv-named-definitions-area-changes-properties-userid.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-area-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/area_history/properties/uId")

#### uId Type

`string` ([UserId](vinv-named-definitions-area-changes-properties-userid.md))

#### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### uId Examples

```json
"FJet9-q0pzhhPhi4vw4M-0qMZ0FtQ5r1VLTR"
```

## Definitions group location

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [vinv](vinv-named-definitions-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/coordinates")               |
| [accuracy](#accuracy)       | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/accuracy") |

### coordinates

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

`coordinates`

*   is required

*   Type: `object` ([Coordinates](vinv-named-definitions-coordinates.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/coordinates")

#### coordinates Type

`object` ([Coordinates](vinv-named-definitions-coordinates.md))

#### coordinates Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `2`

### accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).

`accuracy`

*   is optional

*   Type: `number` ([Accuracy](vinv-named-definitions-location-properties-accuracy.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-location-properties-accuracy.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/location/properties/accuracy")

#### accuracy Type

`number` ([Accuracy](vinv-named-definitions-location-properties-accuracy.md))

#### accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`

#### accuracy Examples

```json
3
```

```json
12
```

## Definitions group coordinates

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [longitude](#longitude) | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-longitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/longitude") |
| [latitude](#latitude)   | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-latitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/latitude")   |
| [altitude](#altitude)   | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-coordinates-properties-altitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/altitude")   |

### longitude

The decimal east–west position of a point. (7 decimal places max)

`longitude`

*   is optional

*   Type: `number` ([Longitude](vinv-named-definitions-coordinates-properties-longitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-longitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/longitude")

#### longitude Type

`number` ([Longitude](vinv-named-definitions-coordinates-properties-longitude.md))

#### longitude Constraints

**maximum**: the value of this number must smaller than or equal to: `180`

**minimum**: the value of this number must greater than or equal to: `-180`

#### longitude Examples

```json
12.4563
```

```json
-130.5627874
```

### latitude

The decimal north–south position of a point. (7 decimal places max)

`latitude`

*   is optional

*   Type: `number` ([Latitude](vinv-named-definitions-coordinates-properties-latitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-latitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/latitude")

#### latitude Type

`number` ([Latitude](vinv-named-definitions-coordinates-properties-latitude.md))

#### latitude Constraints

**maximum**: the value of this number must smaller than or equal to: `90`

**minimum**: the value of this number must greater than or equal to: `-90`

#### latitude Examples

```json
-12.4563
```

```json
50.5627874
```

### altitude

The altitude of the position in meters above mean sea level. (2 decimal places max)

`altitude`

*   is optional

*   Type: `number` ([\[Altitude\]](vinv-named-definitions-coordinates-properties-altitude.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-coordinates-properties-altitude.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/coordinates/properties/altitude")

#### altitude Type

`number` ([\[Altitude\]](vinv-named-definitions-coordinates-properties-altitude.md))

#### altitude Constraints

**minimum**: the value of this number must greater than or equal to: `0`

#### altitude Examples

```json
0
```

```json
130
```

## Definitions group dbh

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/dbh"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group species

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/species"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group dimensions_trunk

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/dimensions_trunk"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group dimensions_crown

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/dimensions_crown"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group diameter_height

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/diameter_height"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [height](#height-1)   | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-diameter-at-height-properties-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/diameter_height/properties/height")     |
| [diameter](#diameter) | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-diameter-at-height-properties-diameter.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/diameter_height/properties/diameter") |

### height

Height of tree in PERCENT where diameter is measured

`height`

*   is optional

*   Type: `number` ([Height](vinv-named-definitions-diameter-at-height-properties-height.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-diameter-at-height-properties-height.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/diameter_height/properties/height")

#### height Type

`number` ([Height](vinv-named-definitions-diameter-at-height-properties-height.md))

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

*   is optional

*   Type: `number` ([Diameter](vinv-named-definitions-diameter-at-height-properties-diameter.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-diameter-at-height-properties-diameter.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/diameter_height/properties/diameter")

#### diameter Type

`number` ([Diameter](vinv-named-definitions-diameter-at-height-properties-diameter.md))

#### diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `10`

#### diameter Examples

```json
34
```

```json
38
```

## Definitions group filter

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/filter"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group image

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/image"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group id

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group workOrderDef

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-5)                 | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-workorder-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/id")     |
| [created](#created-1)       | `string` | Required | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/created")     |
| [authority](#authority)     | `string` | Required | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-user-id-1.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/authority") |
| [contractors](#contractors) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-user-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/contractors") |

### id

Id of the workorder

`id`

*   is optional

*   Type: `string` ([Workorder Id](vinv-named-definitions-workorderdef-properties-workorder-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-workorder-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/id")

#### id Type

`string` ([Workorder Id](vinv-named-definitions-workorderdef-properties-workorder-id.md))

#### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### id Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

### created

Date and time this document was created.

`created`

*   is required

*   Type: `string` ([Created](vinv-named-definitions-workorderdef-properties-created.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/created")

#### created Type

`string` ([Created](vinv-named-definitions-workorderdef-properties-created.md))

#### created Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

#### created Examples

```json
"2018-11-13T20:20:39+00:00"
```

### authority

Id of the user created the workorder

`authority`

*   is required

*   Type: `string` ([User Id](vinv-named-definitions-workorderdef-properties-user-id-1.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-user-id-1.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/authority")

#### authority Type

`string` ([User Id](vinv-named-definitions-workorderdef-properties-user-id-1.md))

#### authority Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

#### authority Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

### contractors

Ids of the users receiving the workorder

`contractors`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-user-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/contractors")

#### contractors Type

`string[]`

#### contractors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## Definitions group plotTypes

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [plotCircle](#plotcircle)   | `object` | Required | cannot be null | [vinv](vinv-named-definitions-circle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotCircle")   |
| [plotPolygon](#plotpolygon) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotPolygon") |

### plotCircle



`plotCircle`

*   is required

*   Type: `object` ([Details](vinv-named-definitions-circle.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-circle.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotCircle")

#### plotCircle Type

`object` ([Details](vinv-named-definitions-circle.md))

### plotPolygon



`plotPolygon`

*   is required

*   Type: `object[][]` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-polygon.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/plotTypes/properties/plotPolygon")

#### plotPolygon Type

`object[][]` ([Location](vinv-named-definitions-location.md))

#### plotPolygon Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## Definitions group polygon

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/polygon"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group circle

Reference this group by using

```json
{"$ref":"https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location-1) | `object` | Optional | cannot be null | [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/location")               |
| [radius](#radius)       | `number` | Optional | cannot be null | [vinv](vinv-named-definitions-circle-properties-radius.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/radius") |

### location



`location`

*   is optional

*   Type: `object` ([Location](vinv-named-definitions-location.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-location.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/location")

#### location Type

`object` ([Location](vinv-named-definitions-location.md))

### radius

Radius in meter

`radius`

*   is optional

*   Type: `number` ([Radius](vinv-named-definitions-circle-properties-radius.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-circle-properties-radius.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/circle/properties/radius")

#### radius Type

`number` ([Radius](vinv-named-definitions-circle-properties-radius.md))

#### radius Default Value

The default value is:

```json
10
```

#### radius Examples

```json
10
```

```json
15
```
