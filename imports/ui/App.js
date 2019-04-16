var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { temperature_data } from '../api/temperature_data.js';
import { withTracker } from 'meteor/react-meteor-data';

import LineGraph from "./LineGraph"
import Tools from "./Tools"
import FloorPlan from "./FloorPlan";
import {graphStyle} from "./layouts/GraphStyle.js"
import {cold, cool, mid, warm, hot} from "./layouts/colors.js"
import {colorPicker} from "./layouts/colorPicker.js"

import DateFnsUtils from "@date-io/date-fns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {MuiPickersUtilsProvider} from "material-ui-pickers";

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

    getRoomColor() {
        {/* Map average temperatures to room colors. */}
        let values = new Array();
        const avgs = this.state.avgs.slice();

        for (var i = 0; i < avgs.length; i++) {
            values[i] = colorPicker(avgs[i]);
        }

        return values;
    }


    render() {
        return (

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

                <div>
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
