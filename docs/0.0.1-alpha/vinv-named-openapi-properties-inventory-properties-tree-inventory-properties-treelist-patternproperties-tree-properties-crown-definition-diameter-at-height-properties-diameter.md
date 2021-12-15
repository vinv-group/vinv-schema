# Diameter Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^[A-Za-z0-9_-]{1,36}$/properties/crown/items/properties/diameter
```

Diameter in CENTIMETER at measured height

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## diameter Type

`number` ([Diameter](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist-patternproperties-tree-properties-crown-definition-diameter-at-height-properties-diameter.md))

## diameter Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `10`
