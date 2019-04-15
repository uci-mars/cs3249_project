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

    convertDate(dateRaw) {
        const formatDate = new Date(dateRaw);

        return formatDate;
    }

    getStartDate() {
        const dateRaw = this.props.dates.slice();
        const start = dateRaw[0];
        const value = this.convertDate(start);

        return value;

    }

    getEndDate() {
        const dateRaw = this.props.dates.slice();
        const end = dateRaw[1];
        const value = this.convertDate(end);

        return value;
    }


    render() {
        const start = this.getStartDate();
        const end = this.getEndDate();
        const visibility = this.props.visible.slice();

        const options = {
            theme: "light2",
            rangeChanged: function (e) {
                console.log(e.axisX[0].viewportMinimum + ", " + e.axisX[0].viewportMaximum);
                console.log(new Date(e.axisX[0].viewportMinimum) + " , " + new Date(e.axisX[0].viewportMaximum));
            },
            zoomEnabled:true,
            title: {
                text: "Temperature Sensor in Tembusu College"
            },
            toolTip:{
                content:"RoomID: {roomID}, Timestamp: {x}, Temperature: {y}°C" ,
            },
            axisX: {
                viewportMinimum: start,
                viewportMaximum: end,
            },
            axisY: {
                title: "Temperature",
                suffix: "°C",
                includeZero: false
            },
            data: [{
            	visible: visibility[0],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_0
            }, {
            	visible: visibility[1],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_1
            }, {
            	visible: visibility[2],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_2
            }, {
            	visible: visibility[3],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_3
            }, {
            	visible: visibility[4],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_4
            }, {
            	visible: visibility[5],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: room_5
            }, {
            	visible: visibility[6],
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
        console.log(this.props.data);

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
                room_6.push({
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
