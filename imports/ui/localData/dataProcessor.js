import {downSample, compare} from "../../api/dataUtils.js"
import { tData } from "../App.j
var DATA = require("./data.json");
var LTTB = require("downsample").LTTB;


function downSample(dataArray, sampleNumber) {
    const numPointsInDownsampledData: number = sampleNumber;
    // console.log(numPointsInDownsampledData);
    const data: DataPoint[] = dataArray;
    const downsampledDataLTTB: DataPoint[] = LTTB(data, numPointsInDownsampledData);
    // console.log(downsampledDataLTTB);
    return downsampledDataLTTB;
};


function compare(a,b) {
    if (a.x.getTime() < b.x.getTime())
        return -1;
    if (a.x.getTime() > b.x.getTime())
        return 1;
    return 0;
};

var rooms = [[], [], [], [], [], [], []];

function parseDataintoArray(){
    for (var i = 0; i < tData.length; i++) {
        if ("0" in tData[i].temperature) {
            rooms[0].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['0'],
                roomID: 0,
            });
        };

        if ("1" in tData[i].temperature) {
            rooms[1].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['1'],
                roomID: 1,
            });
        };

        if ("2" in tData[i].temperature) {
            rooms[2].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['2'],
                roomID: 2,
            });
        };

        if ("3" in tData[i].temperature) {
            rooms[3].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['3'],
                roomID: 3,
            });
        };

        if ("4" in tData[i].temperature) {
            rooms[4].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['4'],
                roomID: 4,
            });
        };

        if ("5" in tData[i].temperature) {
            rooms[5].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['5'],
                roomID: 5,
            });
        };

        if ("6" in tData[i].temperature) {
            rooms[6].push({
                x: new Date(tData[i].timestamp),
                y: tData[i].temperature['6'],
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


function downSampleRooms(sampleNumber) {
    var roomArray = [];

    roomArray[0] = downSample(rooms[0], sampleNumber);
    roomArray[1] = downSample(rooms[1], sampleNumber);
    roomArray[2] = downSample(rooms[2], sampleNumber);
    roomArray[3] = downSample(rooms[3], sampleNumber);
    roomArray[4] = downSample(rooms[4], sampleNumber);
    roomArray[5] = downSample(rooms[5], sampleNumber);
    roomArray[6] = downSample(rooms[6], sampleNumber);

    return roomArray;

}


export {parseDataintoArray, downSampleRooms};
