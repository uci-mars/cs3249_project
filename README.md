# CS3249 Project: Custom UI Dashboard

This project is done by two students at National 
University of Singapore as part the requirement of module `CS3249 User Interface Development`.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development 
and testing purposes.

1. Open the `Terminal`.
2. `cd` to the project folder `cs3249_project`.
3. Type the command `meteor` in the terminal.
4. After project is set up and running, open your browser and go to `http://localhost:3000`.
5. The interface of the application should be displayed on the page.


## Features
This is a single page web application, written in `ReactJS` and deployed using `Meteor`. 

**There are two major components:** 
1. An interactive graph of historical temperature data.
2. The floor plan of rooms where data are collected from.


## Interfaces

**Interactive Graph**

* The graph is implemented using `CanvasJS`.
* It supports zoom & pan.
* The view can be reset using reset button.

![Interactive Graph](/imports/img/graph.png)


**Floor Plan**

* SVG format.
* Support toggle the visibility by clicking on the room.
* Colour of the room changes according to the average temperature 
from data points currently displayed on interactive graph.

![Floor Plan](/imports/img/floor_plan.png)


## Authors

* Zhuang Xinjie 
* Marawin Chheang


