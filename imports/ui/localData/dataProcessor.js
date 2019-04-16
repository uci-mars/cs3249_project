var DATA = require("./data.json");

import {downSample, compare} from "../../api/dataUtils.js"


function parseDataintoArray(rooms){
    for (var i = 0; i < DATA.length; i++) {
        if ("0" in DATA[i].temperature) {
            rooms[0].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['0'],
                roomID: 0,
            });
        };

        if ("1" in DATA[i].temperature) {
            rooms[1].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['1'],
                roomID: 1,
            });
        };

        if ("2" in DATA[i].temperature) {
            rooms[2].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['2'],
                roomID: 2,
            });
        };

        if ("3" in DATA[i].temperature) {
            rooms[3].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['3'],
                roomID: 3,
            });
        };

        if ("4" in DATA[i].temperature) {
            rooms[4].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['4'],
                roomID: 4,
            });
        };

        if ("5" in DATA[i].temperature) {
            rooms[5].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['5'],
                roomID: 5,
            });
        };

        if ("6" in DATA[i].temperature) {
            rooms[6].push({
                x: new Date(DATA[i].timestamp),
                y: DATA[i].temperature['6'],
                roomID: 6,
            });
        };
    };

    rooms[0].sort(compare);
    rooms[1].sort(compare);
    rooms[2].sort(compare);
    rooms[3].sort(compare);
    rooms[4].sort(compare);
    rooms[5].sort(compare);
    rooms[6].sort(compare);

};


function downSampleRooms(roomArray, sampleNumber) {

    roomArray[0] = downSample(roomArray[0], sampleNumber);
    roomArray[1] = downSample(roomArray[1], sampleNumber);
    roomArray[2] = downSample(roomArray[2], sampleNumber);
    roomArray[3] = downSample(roomArray[3], sampleNumber);
    roomArray[4] = downSample(roomArray[4], sampleNumber);
    roomArray[5] = downSample(roomArray[5], sampleNumber);
    roomArray[6] = downSample(roomArray[6], sampleNumber);

}


export {parseDataintoArray, downSampleRooms};









