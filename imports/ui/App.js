var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var DATA = require('./localData/data.json');

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
        };

        this.compare.bind(this);
        this.onClickCallback.bind(this);
    }

    onClickCallback(e) {
        alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
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
        const options = {
            theme: "light2",
            rangeChanging: function (e) {console.log(new Date(e.axisX[0].viewportMinimum) + " , " + new Date(e.axisX[0].viewportMaximum))},
            zoomEnabled:true,
            title: {
                text: "Temperature Sensor in Tembusu College"
            },
            toolTip:{
                content:"RoomID: {roomID}, Timestamp: {x}, Temperature: {y}°C" ,
            },
            axisY: {
                title: "Temperature",
                suffix: "°C",
                includeZero: false
            },
            data: [{
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_0
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_1
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_2
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_3
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_4
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_5
            }, {
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_6
            },
            ]
        };
        return (
            <div>
                <div style={graphStyle}>
                    <CanvasJSChart options = {options}
                                   onRef={ref => this.chart = ref}
                    />
                    {/*
                      You can get reference to the chart instance as shown above using onRef.
                      This allows you to access all chart properties and methods
                    */}
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

    compare(a,b) {
        if (a.x.getTime() < b.x.getTime())
            return -1;
        if (a.x.getTime() > b.x.getTime())
            return 1;
        return 0;
    }

    componentDidMount(){
        var chart = this.chart;


        for (var i = 0; i < DATA.length; i++) {
            if ("0" in DATA[i].temperature) {
                room_0.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['0'],
                    roomID: 0,
                });
            };

            if ("1" in DATA[i].temperature) {
                room_1.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['1'],
                    roomID: 1,
                });
            };

            if ("2" in DATA[i].temperature) {
                room_2.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['2'],
                    roomID: 2,
                });
            };

            if ("3" in DATA[i].temperature) {
                room_3.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['3'],
                    roomID: 3,
                });
            };

            if ("4" in DATA[i].temperature) {
                room_4.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['4'],
                    roomID: 4,
                });
            };

            if ("5" in DATA[i].temperature) {
                room_5.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['5'],
                    roomID: 5,
                });
            };

            if ("6" in DATA[i].temperature) {
                room_5.push({
                    x: new Date(DATA[i].timestamp),
                    y: DATA[i].temperature['6'],
                    roomID: 6,
                });
            };
        };

        room_0.sort(this.compare);
        room_1.sort(this.compare);
        room_2.sort(this.compare);
        room_3.sort(this.compare);
        room_4.sort(this.compare);
        room_5.sort(this.compare);
        room_6.sort(this.compare);

        chart.render();

    }

}

export default App;
