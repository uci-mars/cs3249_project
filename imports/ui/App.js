import {MuiPickersUtilsProvider} from "material-ui-pickers";

var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { temperature_data } from '../api/temperature_data.js';
import { withTracker } from 'meteor/react-meteor-data';


import LineGraph from "./LineGraph"
import Tools from "./Tools"
import FloorPlan from "./FloorPlan";
import DateFnsUtils from "@date-io/date-fns";

const cold = "blue";
const cool = "#41c4f4";
const mid = "#f4df42";
const warm = "orange";
const hot = "red";

var room_0 = [];
var room_1 = [];
var room_2 = [];
var room_3 = [];
var room_4 = [];
var room_5 = [];
var room_6 = [];


const graphStyle = {
    maxWidth: "1155px",
    height: "250px",
};


class App extends Component {
    constructor(props){
        super(props);
        {/* By default, all room stats are visible */}
        {/* default average temperatures are calculated from all data points of each room */}
        {/* default date range is from earliest to the latest data point */}
        {/* default sample number is the total number of data points provided */}
        this.state = {
            visible: [true, true, true, true, true, true, true],
            avgs: [5, 10, 15, 20, 25, 30, 22],
            dates: [new Date("2013-10-02T05:15:00"), new Date("2013-12-03T15:30:00")],
            sampleNumber: 5995,
        };

        this.updateAverage = this.updateAverage.bind(this);
        this.updateDates = this.updateDates.bind(this);
        this.updateSampleNumber = this.updateSampleNumber.bind(this);
    }


    toggleRoom(e) {
        {/* Onclick function used on rooms to toggle with their visibility. */}


        const visible = this.state.visible.slice();
        visible[e] = this.state.visible[e] ? false : true;
        this.setState({
            visible: visible,
        });
    }

    updateAverage(temps) {
        {/* INPUT: an array of temperatures of each room */}
        {/* TODO: initialise avgs state by each room data */}

        this.setState({
            avgs: temps
        });
    }

    updateDates(newDates) {
        {/* INPUT: an array of two elements. newDates[0] is start date; newDates[1] is end date */}

        this.setState({
            dates: newDates
        });
    }

    updateSampleNumber(num) {
        {/* INPUT: an number that represents sample number */}

        this.setState({
            sampleNumber: num
        });
    }


    colorPicker(temp) {
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
    }

    getRoomColor() {
        {/* Map average temperatures to room colors. */}
        let values = new Array();
        const avgs = this.state.avgs.slice();

        for (var i = 0; i < avgs.length; i++) {
            values[i] = this.colorPicker(avgs[i]);
        }

        return values;
    }


    render() {
        console.log(this.props.temperature_data);
        return (
        <div className={"main_div"}>
            <div className={"main_dashboard"}>

                            <div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Tools
                                        dates={this.state.dates}
                                        sampleNumber={this.state.sampleNumber}
                                        updateDates={this.updateDates}
                                        updateSampleNumber={this.updateSampleNumber}
                                    />
                                </MuiPickersUtilsProvider>

                                <div style={graphStyle}>
                                    <LineGraph
                                        visible={this.state.visible}
                                        data={this.props.temperature_data}
                                        dates={this.state.dates}
                                        sampleNumber={this.state.sampleNumber}
                                        updateDates={this.updateDates}
                                        updateSampleNumber={this.updateSampleNumber}
                                    />
                                </div>
                            </div>

            </div>

            <div className={"main_floorplan"}>
                <FloorPlan
                    visible={this.state.visible}
                    rooms={this.getRoomColor()}
                    onClick={(i) => this.toggleRoom(i)}
                />
            </div>
        </div>
        );
    }

}

export default withTracker(() => {
    Meteor.subscribe('temperature_data');

    return {
        temperature_data: temperature_data.find({}).fetch(),
    };
})(App);
