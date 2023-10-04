---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Development

# Pre-processing

## Tools Required

-   AutoCAD LT
-   QGIS (Quantum Geographic Information System)
-   `ogr2ogr` from GDAL

Building floor plans typically come in drawing formats such as `.dwg`, which is predominantly used by AutoCAD. To open
this file, you can use `LibreCAD` or preferably `AutoCAD` or `AutoCAD LT`. The goal is to convert the drawing into
GeoJSON, along with tag it with additional attributes that conforms to our concept of "Building" geo entities.

## Processing

The first thing you should do is to filter out which layers in the `.dwg` are of interest to you. Open up the file,
figure out what you need to keep, which would typically be walls and columns, and write these layers down. In our
example, we'll assume you want to keep the following layers:

-   WINDOW
-   WALL
-   COLUMN

Then, save the file as a `.dxf`. `ogr2ogr` does not play well with `.dwg` files, so use LibreCAD or AutoCAD to save the
file in `.dxf`. The result will be a `.dxf` file that can be processed by `ogr2ogr`.

:::info
We've tried mass converting files using tools but the result was not processable by `ogr2ogr`. You can experiment
to get such tools to help deal with batch conversion but we only ever got `ogr2ogr` readable conversions from LibreCAD
and AutoCAD.
:::

Next, use `ogr2ogr` to convert the drawing to GeoJSON with WGS84 as the coordinate reference system. `ogr2ogr` does not
properly convert `.dwg`.

layer names

<Tabs>
<TabItem value="Windows PowerShell" label="Windows PowerShell" default>

```bash
ogr2ogr `
-progress `
-dialect sqlite `
-sql "SELECT * FROM entities WHERE layer in ('WALL', 'WINDOW', 'COLUMN')" `
-f 'GeoJSON' .\output_file_name.geojson .\input_file_name.dxf `
-t_srs EPSG:4326 `
-s_srs EPSG:3414
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
ogr2ogr \
-progress \
-dialect sqlite \
-sql "SELECT * FROM entities WHERE layer in ('WALL', 'WINDOW', 'COLUMN')" \
-f 'GeoJSON' .\output_file_name.geojson .\input_file_name.dxf \
-t_srs EPSG:4326 \
-s_srs EPSG:3414
```

</TabItem>
</Tabs>

This does not georectify your GeoJSON, but transforms it to be in `WGS84` format, which is what GeoJSON is supposed to
be in. You can then further transform the points to be properly georectified by running it through `ogr2ogr` again. But
first, we need to find 3 reference coordinates that we can pass to `ogr2ogr` to do the transformation.

```
cat .\OMEGA_ONE_STY_7.geojson | jq 'del(.features[].properties.PaperSpace, .features[].properties.SubClasses, .features[].Linetype )' > new.geojson
```

```
aws codeartifact login --tool npm --repository ar2-npm-group --namespace fortawesome --domain agilrad --domain-owner 991204835536
```

_.DWG > ODAFIleConverter(_.DWG) > _.DXF > LibreCAD(_.DXF) > _.DXF > ogr2ogr2(_.DXF) > .GeoJSON >
