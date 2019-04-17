import { rawData } from "../App.js";
var LTTB = require("downsample").LTTB;

function downSample(dataArray, sampleNumber) {
    const numPointsInDownsampledData: number = sampleNumber;
    const data: DataPoint[] = dataArray;
    const downsampledDataLTTB: DataPoint[] = LTTB(data, numPointsInDownsampledData);
    return downsampledDataLTTB;
};

function downSampleRooms(presenterData, dataSet, sampleNumber, defaultSampleNumber, startDate, endDate) {


    if (sampleNumber < defaultSampleNumber){
        presenterData[0] = downSample(dataSet[0], sampleNumber);
        presenterData[1] = downSample(dataSet[1], sampleNumber);
        presenterData[2] = downSample(dataSet[2], sampleNumber);
        presenterData[3] = downSample(dataSet[3], sampleNumber);
        presenterData[4] = downSample(dataSet[4], sampleNumber);
        presenterData[5] = downSample(dataSet[5], sampleNumber);
        presenterData[6] = downSample(dataSet[6], sampleNumber);
    }



}


export {downSampleRooms};
