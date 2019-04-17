import { rawData } from "../App.js";
var LTTB = require("downsample").LTTB;

function downSample(dataArray, sampleNumber) {
    const numPointsInDownsampledData: number = sampleNumber;
    const data: DataPoint[] = dataArray;
    const downsampledDataLTTB: DataPoint[] = LTTB(data, numPointsInDownsampledData);
    return downsampledDataLTTB;
};

function parseDataintoArray(){
    var rooms = [[], [], [], [], [], [], []];

    for (var i = 0; i < rawData.length; i++) {
        if ("0" in rawData[i].temperature) {
            rooms[0].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['0'],
                roomID: 0,
            });
        };
        if ("1" in rawData[i].temperature) {
            rooms[1].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['1'],
                roomID: 1,
            });
        };
        if ("2" in rawData[i].temperature) {
            rooms[2].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['2'],
                roomID: 2,
            });
        };
        if ("3" in rawData[i].temperature) {
            rooms[3].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['3'],
                roomID: 3,
            });
        };
        if ("4" in rawData[i].temperature) {
            rooms[4].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['4'],
                roomID: 4,
            });
        };
        if ("5" in rawData[i].temperature) {
            rooms[5].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['5'],
                roomID: 5,
            });
        };
        if ("6" in rawData[i].temperature) {
            rooms[6].push({
                x: new Date(rawData[i].timestamp),
                y: rawData[i].temperature['6'],
                roomID: 6,
            });
        };
    };

    return(rooms);

};

function mainPresenter(rooms, sampleNumber) {
    var roomArray = [];
    roomArray[0] = downSample(rooms[0], sampleNumber);
    roomArray[1] = downSample(rooms[1], sampleNumber);
    roomArray[2] = downSample(rooms[2], sampleNumber);
    roomArray[3] = downSample(rooms[3], sampleNumber);
    roomArray[4] = downSample(rooms[4], sampleNumber);
    roomArray[5] = downSample(rooms[5], sampleNumber);
    roomArray[6] = downSample(rooms[6], sampleNumber);
    return roomArray;
};

function calculateAvgTemperature(rooms){
    var avgTemps = [];
    for (var i = 0; i < rooms.length; i++){
        var sum = 0;
        for (var j = 0; j < rooms[i].length; j++){
            sum += rooms[i][j].y;
        }
        avgTemps.push(sum/rooms[i].length);
    }
    return avgTemps

}

export {mainPresenter, parseDataintoArray, calculateAvgTemperature};
