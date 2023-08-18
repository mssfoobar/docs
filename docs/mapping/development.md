---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Development

# Pre-processing

## Tools Required

-   AutoCAD LT
-   JOSM (Java OpenStreetMap) Editor
-   `ogr2ogr` from GDAL

Building floor plans typically come in drawing formats such as `.dwg`, which is predominantly used by AutoCAD. To open
this file, you can use `LibreCAD` or preferably `AutoCAD` or `AutoCAD LT`. The goal is to convert the drawing into
GeoJSON, along with tag it with additional attributes that conforms to our concept of "Building" geo entities.

First, we'll need to make sense of where the drawing is geographically. In AutoCAD, you can do this with its
geolocation feature, which you should be able to find in `INSERT > Set Location` or as the `GEOGRAPHICLOCATION` command.

The followng are step by step instructions on how to overlay your drawing onto a map, in the correct location.

1. command: GEOGRAPHICLOCATION
2. Set location from: Map
3. Do you want to use Online Map Data?: Yes
4. Search for the position your building is in, then right-click on the map and click `drop marker here`. Note that the
   position you pick on the map will be correlated to a position you pick in your drawing later on.
5. GIS Coordinate System: Pick the relevant system, you can refer to [epsg.io](https://epsg.io/) to look up what the
   correct code your building should be in.
6. Select the correct Time Zone based on your location
7. Select and Drawing Unit based on scale of the drawing (likely in millimeters)
8. Select a position in your drawing - this should match with the position you picked in the map earlier on.
9. Set the North direction - detailed building plans should have this information included for you to reference.

Unfortunately, out of the box, AutoCAD does not allow us to directly query for the LatLong of points. So in the later
steps, you will need to manually find the points using Google Maps or some other tool.

Next, use `ogr2ogr` to convert the drawing to GeoJSON with WGS84 as the coordinate reference system. `ogr2ogr` does not
properly convert `.dwg`.

In our example, we are using

BP_WINDOW
BP_WIN
BP_WALL_TOP
BP_WALL
BP COLUMN

layer names

<Tabs>
<TabItem value="Windows PowerShell" label="Windows PowerShell" default>

```bash
ogr2ogr `
-progress `
-dialect sqlite `
-sql "SELECT * FROM entities WHERE layer in ('BP_WALL', 'BP_WALL_TOP', 'BP_WINDOW', 'BP_WIN', 'BP COLUMN')" `
-f 'GeoJSON' .\OMEGA_ONE_STY_7.geojson .\OMEGA_ONE_STY_7.dxf `
-t_srs EPSG:4326 `
-s_srs EPSG:3414
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
ogr2ogr \
-progress \
-dialect sqlite \
-sql "SELECT * FROM entities WHERE layer in ('BP_WALL', 'BP_WALL_TOP', 'BP_WINDOW', 'BP_WIN', 'BP COLUMN')" \
-f 'GeoJSON' .\OMEGA_ONE_STY_7.geojson .\OMEGA_ONE_STY_7.dxf \
-t_srs EPSG:4326 \
-s_srs EPSG:3414
```

</TabItem>
</Tabs>

This does not georectify your GeoJSON, but transforms it to be in `WGS84` format, which is what GeoJSON is supposed to
be in. You can then further transform the points to be properly georectified by running it through `ogr2ogr` again. But
first, we need to find 3 reference coordinates that we can pass to `ogr2ogr` to do the transformation.

<Tabs>
<TabItem value="Windows PowerShell" label="Windows PowerShell" default>

```bash
ogr2ogr `
    -progress `
    -f 'GeoJSON' `
    ./OMEGA_ONE_STY_7_GEORECT.geojson `
    ./OMEGA_ONE_STY_7.geojson `
    -gcp 1.26821735838468 106.398685289749 1.39010 103.84697 `
    -gcp 0.863469976192515 106.398350183189 1.38965 103.84707 `
    -gcp 0.862374623451951 107.686860346494 1.389988 103.848338

```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
ogr2ogr \
    -progress \
    -f 'GeoJSON' \
    ./OMEGA_ONE_STY_7_GEORECT.geojson \
    ./OMEGA_ONE_STY_7.geojson \
    -gcp 0.2515287 2.81713315 1.39010 103.84697 \
    -gcp 0.86347005 106.3983503 1.38965 103.84707 \
    -gcp 0.86237445 107.6868602 1.389988 103.848338
```

</TabItem>
</Tabs>

```
cat .\OMEGA_ONE_STY_7.geojson | jq 'del(.features[].properties.PaperSpace, .features[].properties.SubClasses, .features[].Linetype )' > new.geojson
```

```
aws codeartifact login --tool npm --repository ar2-npm-group --namespace fortawesome --domain agilrad --domain-owner 991204835536
```

_.DWG > ODAFIleConverter(_.DWG) > _.DXF > LibreCAD(_.DXF) > _.DXF > ogr2ogr2(_.DXF) > .GeoJSON >

ST Engineering Hub:

1.390108, 103.846971
