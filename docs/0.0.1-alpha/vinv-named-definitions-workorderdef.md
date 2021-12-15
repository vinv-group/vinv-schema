# Untitled object in vinv Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## workOrderDef Type

`object` ([Details](vinv-named-definitions-workorderdef.md))

# workOrderDef Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string` | Optional | cannot be null | [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/id")                                       |
| [created](#created)         | `string` | Required | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/created")     |
| [authority](#authority)     | `string` | Required | cannot be null | [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/authority")                                |
| [contractors](#contractors) | `array`  | Required | cannot be null | [vinv](vinv-named-definitions-workorderdef-properties-user-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/contractors") |

## id

Id of the workorder

`id`

*   is optional

*   Type: `string` ([Workorder Id](vinv-named-definitions-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/id")

### id Type

`string` ([Workorder Id](vinv-named-definitions-id.md))

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

*   Type: `string` ([Created](vinv-named-definitions-workorderdef-properties-created.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-created.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/created")

### created Type

`string` ([Created](vinv-named-definitions-workorderdef-properties-created.md))

### created Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

### created Examples

```json
"2018-11-13T20:20:39+00:00"
```

## authority

Id of the user created the workorder

`authority`

*   is required

*   Type: `string` ([User Id](vinv-named-definitions-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/authority")

### authority Type

`string` ([User Id](vinv-named-definitions-id.md))

### authority Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

### authority Examples

```json
"tWJBpKAEMMOKzEOwdr49CV1ETJvGDrD8Zzvv"
```

## contractors

Ids of the users receiving the workorder

`contractors`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-workorderdef-properties-user-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/definitions/workOrderDef/properties/contractors")

### contractors Type

`string[]`

### contractors Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
