# TreeChangesList Schema

```txt
https://schema.vinv.io/0.0.1-alpha/vinv.min.json#/properties/inventory/properties/trees/properties/actions
```

List of tree data changed

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json*](../../0.0.1-alpha/vinv.min.json "open original schema") |

## actions Type

an array where each item follows the corresponding schema in the following list:

1.  [Tree Id](vinv-definitions-tree-changes-items-tree-id.md "check type definition")

2.  [Time of Change](vinv-definitions-tree-changes-items-time-of-change.md "check type definition")

3.  [Tree](vinv-definitions-tree.md "check type definition")

4.  [UserId](vinv-definitions-tree-changes-items-userid.md "check type definition")
