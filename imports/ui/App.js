var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import { temperature_data } from '../api/temperature_data.js';
import { withTracker } from 'meteor/react-meteor-data';
import LoadingScreen from 'react-loading-screen';

import LineGraph from "./LineGraph"
import Tools from "./Tools"
import FloorPlan from "./FloorPlan";
import {graphStyle} from "./layouts/GraphStyle.js"

import {mainPresenter, parseDataintoArray, calculateAvgTemperature} from "./presenter/dataPresenter.js"

import {MuiPickersUtilsProvider} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";


var queryDate = {};

export var rawData = [];

class App extends Component {
    constructor(props){
        super(props);
        {/* By default, all room stats are visible */}
        {/* default average temperatures are calculated from all data points of each room */}
        {/* default date range is from earliest to the latest data point */}
        {/* default sample number is the total number of data points provided */}
        this.state = {
            visible: [true, true, true, true, true, true, true],
            avgs: [0, 0, 0, 0, 0, 0, 0],
            dates: [new Date("2013-10-02T05:15:00"), new Date("2013-12-03T15:30:00")],
            sampleNumber: 5995,
        };

        this.presenterData = [[], [], [], [], [], [], []];

        Session.set('startDate', new Date("2013-10-02T05:15:00"));
        Session.set('endDate', new Date("2013-12-03T15:30:00"));

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

    updateAverage() {
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

        Session.set('startDate', this.state.dates[0]);
        Session.set('endDate', this.state.dates[1]);

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
            values[i] = "hsla(240, 100%, 50%,"+ (Math.floor((avgs[i] * 16)/45) / 10) + ")";
        }
        // console.log(values);
        return values;
    }


    render() {
        if (!this.props.isLoading) {
            this.presenterData = mainPresenter(parseDataintoArray(), this.state.sampleNumber);
            this.state.avgs = calculateAvgTemperature(this.presenterData);

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
                                data={this.presenterData}
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
    let data = [];

    Session.get('startDate');
    Session.get('endDate');

    const subscription = Meteor.subscribe('temperature_data');

    if (subscription.ready()) {
        isLoading = false;
        rawData = temperature_data.find({"timestamp" : queryDate},{ sort: { "timestamp": 1 }}).fetch();
        console.log(rawData);
    }

    return {data, isLoading};
})(App);
