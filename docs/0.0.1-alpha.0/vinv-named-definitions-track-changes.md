# Track Changes Schema

```txt
https://schema.vinv.io/0.0.1-alpha.0/vinv-named.min.json#/definitions/track_history
```

Changes to the track data


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vinv-named.min.json\*](../../0.0.1-alpha.0/named/vinv-named.min.json "open original schema") |

## track_history Type

an array where each item follows the corresponding schema in the following list:

1.  [Track Id](vinv-named-definitions-track-changes-items-track-id.md "check type definition")
2.  [Change](vinv-named-definitions-track-changes-items-change.md "check type definition")
3.  [Track definition](vinv-named-definitions-track-definition.md "check type definition")

## track_history Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `3`
