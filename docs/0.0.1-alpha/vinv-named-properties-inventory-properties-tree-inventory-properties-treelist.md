# TreeList Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/trees/properties/data
```

List of trees defined

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json*](../../0.0.1-alpha/named/vinv-named.min.json "open original schema") |

## data Type

`object` ([TreeList](vinv-named-properties-inventory-properties-tree-inventory-properties-treelist.md))

# data Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :---------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `^[A-Za-z0-9_-]{1,36}$` | `object` | Optional | cannot be null | [vinv](vinv-named-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^[A-Za-z0-9_-]{1,36}$") |

## Pattern: `^[A-Za-z0-9_-]{1,36}$`

Tree definition

`^[A-Za-z0-9_-]{1,36}$`

*   is optional

*   Type: `object` ([Tree](vinv-named-definitions-tree.md))

*   cannot be null

*   defined in: [vinv](vinv-named-definitions-tree.md "https://schema.vinv.io/0.0.1-alpha/vinv-named.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^\[A-Za-z0-9\_-]{1,36}$")

### ^\[A-Za-z0-9\_-]{1,36}$ Type

`object` ([Tree](vinv-named-definitions-tree.md))
