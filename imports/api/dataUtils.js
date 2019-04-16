import React, {Component} from 'react';

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


export {downSample, compare};
