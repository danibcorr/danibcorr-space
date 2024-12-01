---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario de impresión 3D.
title: Impresión 3D
toc_max_heading_level: 4
---
# 3D Printing Knowledge

While the concepts presented in this block are applicable to a variety of printers, we will focus primarily on the Ender 3 S1 printer to provide a specific focus.

## References

* [https://www.youtube.com/@Control3D](https://www.youtube.com/@Control3D)
* [https://www.klipper3d.org/](https://www.klipper3d.org/)
* [https://www.reddit.com/r/klippers/](https://www.reddit.com/r/klippers/)

## General 3D Printing Tips

### Stringing

Stringing refers to the movements made by the extruder when moving from point A to point B without ejecting material, which can result in stringing during printing. It is important to note that retractions are specific to each printer model. Also, retraction settings can vary between different materials and even within the same brand of material.

#### Parameters to adjust

* **Retraction distance.** This refers to the amount of backward movement that is performed to relieve pressure on the extruder. It is important to note that increasing the retraction distance does not always result in an improvement, as it can cause jams in the hotend. For most PLA printing cases, 30/40 mm retraction speeds are usually sufficient.
* **Travel speed.** Travel speed during retractions that depends on the printer mechanics. There is no single speed that works for all printers, so it is important to adjust it according to the specifications and conditions of the machine.
* **Z-jump.** The Z-jump, which is a setting for slicers, can cause threading problems in some cases, but can be useful in others. A Z-jump setting of 0.2 mm is usually a good choice to avoid unwanted strings.
* For a printer with a **direct extruder**, such as the Ender 3 S1, a retraction distance of 1 mm at a speed of 30 mm/s is recommended. As for the travel speed, a range of 120-150 mm/s is suggested, but it is important to test and adjust based on the specific needs of the printer.

### Print Faster

Print speed does not always directly translate into shorter print times, as this depends on the type of material used, the characteristics of the part, and other factors. While increasing the print speed can speed up the process, it can also affect the quality of the print and increase the risk of errors.

#### Parameters to adjust

* **Layer Height**. To achieve excellent print quality, the layer height can be reduced to values ​​of 0.15/0.16. By decreasing the layer height, you reduce the distance between layers and get higher quality printed parts.
* **Infill.** The type of infill and the pattern used will depend on the part to be printed. The most recommended infill pattern in general is Gyroid, as it distributes loads better across the entire print surface. However, it is important to adjust the infill according to the specific needs of each part. In Prusa Slicer, you can use the "blend infill every X" parameter to alternate infill on one layer on and one layer off. In CURA, this parameter is called "infill layer thickness", and its value should be double the layer height to print supports on one layer on and one layer off.
* **Perimeters**. For parts that require greater strength, a thickness of 3 perimeter layers can be used. However, in other cases, 2 layers may be sufficient. As a recommendation, the print speed used for the inner perimeter can be half the speed used for outer perimeters and smaller details.* **Nozzle Changes**. When using a 0.6 mm or larger nozzle, you can use larger layer heights and also increase the number of layers for infill, even every 3 layers.
* **Speed ​​Settings**. Speed ​​settings depend on several factors, such as printer capacity and desired quality. It is recommended to test and adjust gradually to find the optimal print speed for each situation.

### Improving Part Quality

Inertial deposit volume is an important parameter to improve seams and retractions in 3D printing. You want to find an appropriate distance to prevent layers from becoming compacted or open.

You can start by testing with a deposit volume of 0.128 mm3 (cubic millimeters). If layers become compacted, you can double this value. However, it is not recommended to increase the volume further, unless you are using a 0.6 mm or 0.8 mm nozzle. On the other hand, if the layers are left open with a volume of 0.128 mm3, this can be reduced by half.

### Settings for 0.6 nozzles

It is recommended to enable the “clean nozzle during retractions” option to prevent stringing and avoid contamination on the printed part. This feature involves performing a small movement of the nozzle to remove any excess material before starting the retraction. It is also beneficial to enable “inertia deposition”, which helps improve the quality of the seams and reduces the appearance of seams on the printed part. This option allows a continuous flow of material into the nozzle during retraction movements, thus avoiding inconsistencies in material deposition. Additionally, it is recommended to set a low value for the “extra retraction priming” of around 0.3 mm3. This will ensure that a small amount of material is ejected at the beginning of each retraction, which will help prevent nozzle clogging and improve the quality of the prints.

Combining these settings will optimize the printing process and help to achieve more accurate and clean results on printed parts.

#### High Quality Profile

* Layer height from 0.15mm to 0.28mm.
* Line width of 0.66mm with an initial layer height ALWAYS of 0.3mm.
* 2 walls.
* If the part contains overhangs or areas that require good support, it is suggested to print the infill first and then the walls. This will ensure better support of the overhangs during the printing process.
* Combine infill every 3 layers.&#x20;
* Infill speed of 60mm/s, outer wall of 15mm/s and inner wall of 30mm/s.

#### Medium Quality Profile

* Layer height from 0.28 to 0.35.
* Line width of 0.66mm with an initial layer height ALWAYS of 0.3mm.
* 2 walls.
* If the part contains overhangs or areas that require good support, it is suggested to print the infill first and then the walls. This will ensure better support of the overhangs during the printing process.
* Infill speed of 65 mm/s, outer wall of 20 mm/s and inner wall 40 mm/s.

#### Low quality profile

* Layer height of 0.35 to 0.48.
* Line width of 0.72 mm with an initial layer height ALWAYS of 0.3 mm.
* 1 walls.&#x20;
* Infill speed of 70 mm/s, outer wall of 25 mm/s and inner wall 50 mm/s.

## Klipper

Resonance calibration to maintain print quality, allows to reduce times, increase speeds, etc.

## Miscellaneous notes

Improving the quality of prints:

+ Upper or lower monotonic order
+ Displacement in combed mode

The higher the speed, the higher the temperature to melt the plastic