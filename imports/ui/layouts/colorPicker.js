import React, {Component} from 'react';
import {cold, cool, mid, warm, hot} from "./colors.js"

function colorPicker(temp) {
    {/* Section the temperature to different color range. */}
    if (temp <= 10) {
        return cold;

    } else if (temp <= 18) {
        return cool;

    } else if (temp <= 22) {
        return mid;

    } else if (temp <= 26) {
        return warm;

    } else {
        return hot;
    }
};

export {colorPicker};