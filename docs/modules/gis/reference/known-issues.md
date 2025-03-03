---
sidebar_position: 2
sidebar_label: Known Issues
---

# Known Issues

## Client-side Search Performance Scaling

It is conceivable that there are many entities on the map that need to be searched through - this means naive methods of
storing and retrieving such entities client-side can have a significant performance impact (e.g. searching through more
than 100,000 objects - this was an issue for some other projects).

Systems typically deal with this by indexing their data. Managing entities this way is more complex but is potentially
necessary. We do not plan to deal with this at the moment, however, we think we can commit to using PostGIS to do
geospatial indexing, allowing location-based queries to help resolve such issues.

## `map.config.user_id` is not used but required

The `user_id` is currently being expected but not used. You can either remove the offending code, pass in the actual
`user_id`, or simply pass in a truthy value here.

Remove this expression in the code:

```typescript title="src/lib/aoh/gis/components/Map/index.svelte"
&& map.config?.user_id
```
