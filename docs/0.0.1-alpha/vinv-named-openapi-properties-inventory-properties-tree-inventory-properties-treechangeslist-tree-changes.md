# Tree Changes Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items
```

Changes to the tree data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## items Type

`object` ([Tree Changes](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes.md))

# items Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                           |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string` | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/id")               |
| [changedAt](#changedat)   | `string` | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-time-of-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/changedAt") |
| [definition](#definition) | `object` | Required | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/definition")          |
| [uId](#uid)               | `string` | Optional | cannot be null | [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/uId")               |

## id

URL-friendly id

`id`

*   is required

*   Type: `string` ([Tree Id](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree-id.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree-id.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/id")

### id Type

`string` ([Tree Id](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree-id.md))

### id Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")

## changedAt

Date and time when change happened.

`changedAt`

*   is required

*   Type: `string` ([Time of Change](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-time-of-change.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-time-of-change.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/changedAt")

### changedAt Type

`string` ([Time of Change](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-time-of-change.md))

### changedAt Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## definition

Tree definition

`definition`

*   is required

*   Type: `object` ([Tree](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/definition")

### definition Type

`object` ([Tree](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-tree.md))

## uId



`uId`

*   is optional

*   Type: `string` ([UserId](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-userid.md))

*   cannot be null

*   defined in: [vinv](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-userid.md "https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/actions/items/properties/uId")

### uId Type

`string` ([UserId](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treechangeslist-tree-changes-properties-userid.md))

### uId Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9\_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")
