var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var DATA = require("./localData/data.json");


var room_0 = [];
var room_1 = [];
var room_2 = [];
var room_3 = [];
var room_4 = [];
var room_5 = [];
var room_6 = [];

class LineGraph extends Component {
    constructor(props){
        super(props);

        this.compare.bind(this);
        this.onClickCallback.bind(this);
    }

    onClickCallback(e) {
        alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
    }


    render() {
        const options = {
            theme: "light2",
            rangeChanged: function (e) {console.log(new Date(e.axisX[0].viewportMinimum) + " , " + new Date(e.axisX[0].viewportMaximum))},
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

                <CanvasJSChart className='line-graph'
                               options = {options}
                               onRef={ref => this.chart = ref}
                />

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
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

export default LineGraph;
