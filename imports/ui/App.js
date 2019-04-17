var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { temperature_data } from '../api/temperature_data.js';
import { room_0, room_1, room_2, room_3, room_4, room_5, room_6 } from '../api/room_0.js';
import { withTracker } from 'meteor/react-meteor-data';
import LoadingScreen from 'react-loading-screen';

import LineGraph from "./LineGraph"
import Tools from "./Tools"
import FloorPlan from "./FloorPlan";
import {graphStyle} from "./layouts/GraphStyle.js"
import {colorPicker} from "./layouts/colorPicker.js"


import {downSampleRooms} from "./localData/dataProcessor.js"

import {MuiPickersUtilsProvider} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";


var queryDate = {$gte: new Date("2013-10-02T05:15:00"), $lt: new Date("2013-12-03T15:30:00")};

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

        this.roomArr = [[], [], [], [], [], [], []];

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

        queryDate = {$gte: this.state.dates[0], $lt: this.state.dates[1]};
    }

    updateSampleNumber(num) {
        {/* INPUT: an number that represents sample number */}
        this.setState({
            sampleNumber: num
        });
        this.forceUpdate();
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


        if (!this.props.isLoading) {
             downSampleRooms(this.roomArr,
                            this.props.parsedData,
                            this.state.sampleNumber,
                            5995,
                            this.state.dates[0],
                            this.state.dates[1],
                            this.state.visible);

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

                        </div>

                        <div style={graphStyle}>
                            <LineGraph


                                visible={this.state.visible}
                                data={this.props.parsedData}
                                dates={this.state.dates}
                                sampleNumber={this.state.sampleNumber}
                                updateDates={this.updateDates}
                                updateSampleNumber={this.updateSampleNumber}
                            />
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
        else{
            return (
                <LoadingScreen
                    loading={true}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    text='Loading Temperature Data'
                />
            );

    }


}

}

export default withTracker(() => {
    // https://stackoverflow.com/questions/42047761/how-to-check-for-subscription-ready-in-a-react-component
    let isLoading = true;
    let data_0 = [];

    var parsedData = [[], [], [], [], [], [], []];

    const subscription_0 = Meteor.subscribe('room_0');
    const subscription_1 = Meteor.subscribe('room_1');
    const subscription_2 = Meteor.subscribe('room_2');
    const subscription_3 = Meteor.subscribe('room_3');
    const subscription_4 = Meteor.subscribe('room_4');
    const subscription_5 = Meteor.subscribe('room_5');
    const subscription_6 = Meteor.subscribe('room_6');

    if (subscription_0.ready() && subscription_1.ready() && subscription_2.ready() && subscription_3.ready() && subscription_4.ready() && subscription_5.ready() && subscription_6.ready()) {
        isLoading = false;
        parsedData[0] = room_0.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[1] = room_1.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[2] = room_2.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[3] = room_3.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[4] = room_4.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[5] = room_5.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        parsedData[6] = room_6.find({"x" : queryDate},{ sort: { "x": 1 }}).fetch();
        console.log(parsedData);


    }

    return {parsedData, isLoading};
})(App);
