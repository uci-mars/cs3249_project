# CS3249 Project: Custom UI Dashboard

This project is done by two students at National 
University of Singapore as part the requirement of module `CS3249 User Interface Development`.

## Getting started

Get yourself a copy of the project and follow the instructions below to run on your local machine for development 
and testing purposes.

#### To run the app:
1. Open the `Terminal`.
2. `cd` to the project folder `cs3249_project`.
3. Type the command `meteor npm install --save` to install dependencies.
4. Once done, type the command `meteor` in the terminal to start the app.<br/><br/>
`If this is your first time running the app, be sure to follow the instruction below on how to load the database before continuing.`<br/><br/>
`Problem with Meteor-MongoDB? Run `meteor reset` and then try to run the app again!`<br/><br/>

5. After project is set up and running, open your browser and go to `http://localhost:3000`.
6. The interface of the application should be displayed on the page.



#### Loading the data into MongoDB (First-time use only):
1. Open the Meteor-MongoDB console using one of the methods below (make sure that the app is running):
* `WINDOWS_meteor_mongo.bat` for Windows 
* `MACOSX_meteor_mongo.sh` for Mac
* Open another terminal and type the command `meteor mongo`.
2. Type the command `load('server/script.js')` into Meteor-MongoDB console.
3. Close the console.


## Features
This is a single page web application, written in `ReactJS` and deployed using `Meteor`. 

**There are three major components:** 
1. A tool panel consists of `start & end time field` to set viewport and a `slider` for adjusting sample number used in the graph.
2. An interactive graph of historical temperature data.
3. The floor plan of rooms where data are collected from.


## Interfaces
**Tool Panel**

* `start time field` is used to set the minimum value on x-axis of graph.
* `end time field` is used to set the maximum value on x-axis of graph.
* `slider` is used to adjust the number of samples used in the graph.

![Tool Panel](/imports/img/tools.png)


**Interactive Graph**

* The graph is implemented using `CanvasJS`.
* It supports user actions: `zoom`, `pan` and `reset`.

![Interactive Graph](/imports/img/graph.png)


**Floor Plan**

* SVG format.
* Support toggle the visibility by clicking on the room.
* Colour of the room changes according to the average temperature 
from data points currently displayed on interactive graph.

![Floor Plan](/imports/img/floor_plan.png)


## Developers

* Zhuang Xinjie 
* Marawin Chheang


