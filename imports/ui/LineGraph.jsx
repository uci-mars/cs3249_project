var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var roomArr = [[], [], [], [], [], [], []];

import {parseDataintoArray, downSampleRooms} from "./localData/dataProcessor.js"



class LineGraph extends Component {
    constructor(props){
        super(props);

        this.onClickCallback.bind(this);
    }

    onClickCallback(e) {
        alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
    }

    handleChangeInStartDate = name => event => {
        this.props.updateDates([event.target.value, this.props.dates[1]]);
    };

    handleChangeInEndDate = name => event => {
        this.props.updateDates([this.props.dates[0], event.target.value]);
    };

    render() {
        const visibility = this.props.visible.slice();
        const changeStart = this.handleChangeInStartDate;
        const changeEnd = this.handleChangeInEndDate;

        console.log(roomArr);

        const options = {
            theme: "light2",
            rangeChanged: function (e) {
                changeStart(new Date(e.axisX[0].viewportMinimum));
                changeEnd(new Date(e.axisX[0].viewportMaximum));
            },
            zoomEnabled:true,
            title: {
                text: "Temperature Sensor in Tembusu College",
                fontFamily: "Roboto",
                fontWeight: "normal",
                fontSize: 24,

            },
            toolTip:{
                content:"RoomID: {roomID}, Timestamp: {x}, Temperature: {y}°C" ,
            },
            axisX: {
                viewportMinimum: this.props.dates[0],
                viewportMaximum: this.props.dates[1],
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
                dataPoints: roomArr[0]
            }, {
            	visible: visibility[1],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[1]
            }, {
            	visible: visibility[2],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[2]
            }, {
            	visible: visibility[3],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[3]
            }, {
            	visible: visibility[4],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[4]
            }, {
            	visible: visibility[5],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[5]
            }, {
            	visible: visibility[6],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: roomArr[6]
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

    componentDidMount(){
        const chart = this.chart;
        const sampleNumber = this.props.sampleNumber

        parseDataintoArray(roomArr);

        downSampleRooms(roomArr, sampleNumber);

        chart.render();

    }

}

export default LineGraph;
