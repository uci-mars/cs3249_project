import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from "@date-io/date-fns";
import { InlineDateTimePicker } from "material-ui-pickers";
const toolStyle = {
    padding: "0px 0px 0px 30px",
    display: "inline-flex"
};

const typoStyle = {
    padding: "10px"
};

const sliderStyles = {
    width: 300,
    padding: "15px 0px 0px 270px",
    align: "right"
};


class Tools extends Component {
    constructor(props){
        super(props);
        this.state = {


        };


    };

    handleChangeInStartDate (date){
        this.props.updateDates([date, this.props.dates[1]]);
    };

    handleChangeInEndDate (date) {
        this.props.updateDates([this.props.dates[0], date]);
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){

        const { value } = this.state;

        return(
            <div style={toolStyle}>

                <div className="picker">
                    <InlineDateTimePicker
                        keyboard
                        minDate={new Date("2013-10-02T05:15:00")}
                        maxDate={new Date("2013-12-03T15:30:00")}
                        ampm={true}
                        label="With keyboard"
                        value={this.props.dates[0]}
                        onChange={val => {this.handleChangeInStartDate(val)}}
                        onError={console.log}
                        format={'yyyy/MM/dd HH:mm A'}
                        mask={[
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            "/",
                            /\d/,
                            /\d/,
                            "/",
                            /\d/,
                            /\d/,
                            " ",
                            /\d/,
                            /\d/,
                            ":",
                            /\d/,
                            /\d/,
                        ]}
                    />

                    <InlineDateTimePicker
                        keyboard
                        minDate={new Date("2013-10-02T05:15:00")}
                        maxDate={new Date("2013-12-03T15:30:00")}
                        ampm={true}
                        label="With keyboard"
                        value={this.props.dates[1]}
                        onChange={val => {this.handleChangeInEndDate(val)}}
                        onError={console.log}
                        format={'yyyy/MM/dd HH:mm A'}
                        mask={[
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            "/",
                            /\d/,
                            /\d/,
                            "/",
                            /\d/,
                            /\d/,
                            " ",
                            /\d/,
                            /\d/,
                            ":",
                            /\d/,
                            /\d/,
                        ]}
                    />
                </div>

                {/*<div style={sliderStyles}>*/}
                    {/*<Typography style={typoStyle}>No. of samples</Typography>*/}
                    {/*<Slider*/}
                      {/*value={value}*/}
                      {/*min={0}*/}
                      {/*max={6}*/}
                      {/*step={1}*/}
                      {/*onChange={this.handleChange}*/}
                    {/*/>*/}
                {/*</div>   */}
            </div>     
        );

    }

}



export default Tools;
