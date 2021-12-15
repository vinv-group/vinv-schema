# Accuracy Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv-named-openapi.min.json#/properties/inventory/properties/trees/properties/data/patternProperties/^[A-Za-z0-9_-]{1,36}$/properties/location/properties/accuracy
```

The decimal accuracy of coordinates in meter (2 decimal places max).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named-openapi.min.json*](../../0.0.1-alpha/openapi/vinv-named-openapi.min.json "open original schema") |

## accuracy Type

`number` ([Accuracy](vinv-named-openapi-properties-inventory-properties-tree-inventory-properties-treelist-patternproperties-tree-properties-location-properties-accuracy.md))

## accuracy Constraints

**minimum**: the value of this number must greater than or equal to: `0`
