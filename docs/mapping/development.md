---
sidebar_position: 2
---

# Development

# Pre-processing

WIP

AutoCAD LT:

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

```bash
ogr2ogr -progress -dialect sqlite -sql "SELECT * FROM entities WHERE layer in ('BP_WALL', 'BP_WALL_TOP', 'BP_WINDOW', 'BP_WIN', 'BP COLUMN')" `-f 'GeoJSON' .\OMEGA_ONE_STY_7.geojson .\OMEGA_ONE_STY_7.dxf -t_srs EPSG:4326 -s_srs EPSG:3414
```

```
ogr2ogr \
    -progress \
    -f 'GeoJSON' \
    ./examples/autocad/plan.geojson \
    ./examples/autocad/plan_raw.geojson \
    -gcp 0.2515287 2.81713315 1.390108, 103.846971 \
    -gcp -0.1509158 2.8171329 === === \
    -gcp -- -- == ==
```

```
aws codeartifact login --tool npm --repository ar2-npm-group --namespace fortawesome --domain agilrad --domain-owner 991204835536
```

BP_WINDOW
BP_WIN
BP_WALL_TOP
BP_WALL
BP COLUMN

_.DWG > ODAFIleConverter(_.DWG) > _.DXF > LibreCAD(_.DXF) > _.DXF > ogr2ogr2(_.DXF) > .GeoJSON >

ST Engineering Hub:

1.390108, 103.846971
