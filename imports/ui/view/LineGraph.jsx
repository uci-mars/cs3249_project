var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('../canvasjs/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineGraph extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date(),
        };

        this.handleChangeInStartDate = this.handleChangeInStartDate.bind(this);
    }

    handleChangeInStartDate(date){
        this.props.updateDates([date, this.props.dates[1]]);
    };

    handleChangeInEndDate(date){
        this.props.updateDates([this.props.dates[0], date]);
    };

    render() {
        var that = this; //https://stackoverflow.com/a/9644107
        const visibility = this.props.visible.slice();

        const options = {
            theme: "light2",

            rangeChanged: function (e) {
                if(e.trigger === "reset") {
                    that.handleChangeInStartDate(new Date("2013-10-02T05:15:00"));
                    that.handleChangeInEndDate(new Date("2013-12-03T15:30:00"));
                } else {
                    that.handleChangeInStartDate(new Date(e.axisX[0].viewportMinimum));
                    that.handleChangeInEndDate(new Date(e.axisX[0].viewportMaximum));
                }
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
                dataPoints: this.props.data[0]
            }, {
            	visible: visibility[1],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[1]
            }, {
            	visible: visibility[2],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[2]
            }, {
            	visible: visibility[3],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[3]
            }, {
            	visible: visibility[4],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[4]
            }, {
            	visible: visibility[5],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[5]
            }, {
            	visible: visibility[6],
                type: "line",
                xValueFormatString: "DD/MM/YY hh:mm tt",
                yValueFormatString: "##.#####",
                dataPoints: this.props.data[6]
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
        chart.render();

    }

}

export default LineGraph;
