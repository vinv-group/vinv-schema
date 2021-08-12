# Document ID Schema

```txt
<<<<<<< HEAD
https://schema.vinv.io/0.0.1-alpha.0/vinv.min.json#/properties/id
=======
https://schema.vinv.io/0.1-alpha/dist/vinv.json#/properties/id
>>>>>>> main
```

Once created, this ID should never change.


<<<<<<< HEAD
| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.min.json\*](../../0.0.1-alpha.0/vinv.min.json "open original schema") |
=======
| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv.schema.json\*](../../0.1-alpha/dist/vinv.schema.json "open original schema") |
>>>>>>> main

## id Type

`string` ([Document ID](vinv-properties-document-id.md))

## id Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Za-z0-9_-]{1,36}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_-%5D%7B1%2C36%7D%24 "try regular expression with regexr.com")
<<<<<<< HEAD
=======

## id Examples

```json
"0.1"
```

```json
"0.1-beta"
```
>>>>>>> main
