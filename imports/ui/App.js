var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import LineGraph from "./LineGraph"
import Tools from "./Tools"
import Grid from "@material-ui/core/Grid";
import FloorPlan from "./FloorPlan";

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
    width: "90%",
    height: "350px",
    padding: "30px",
};

class App extends Component {
    constructor(props){
        super(props);
        {/* By default, all room stats are visible */}
        {/* visible state syncs between floor plan and graph */}
        {/* TODO: initialise avgs state by actual data */}
        this.state = {
            visible: [true, true, true, true, true, true, true],
            avgs: [5, 10, 15, 20, 25, 30, 22],
            dates: ["2013-10-02T05:15:00", "2013-12-03T15:30:00"],
            sampleNumber: [5995],
        };

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

    toggleRoom(e) {
        {/* Onclick function used on rooms to toggle with their visibility. */}
        const visible = this.state.visible.slice();
        visible[e] = this.state.visible[e] ? false : true;
        this.setState({
            visible: visible,
        });
    }


    render() {
        return (
            <div>
                <Tools
                    dates={this.state.dates}
                    sampleNumber={this.state.sampleNumber}
                />

                <div style={graphStyle}>
                    <LineGraph
                        dates={this.state.dates}
                        sampleNumber={this.state.sampleNumber}
                    />
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

export default App;
