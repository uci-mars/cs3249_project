import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InlineDateTimePicker } from "material-ui-pickers";

export default class ToolPanel extends Component{

    constructor(props) {
        super(props);
        this.state = {value: 50, startDate: "2013-10-02T05:00:00Z", endDate: "2013-12-03T15:15:00Z" };

        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleDataChange(e, value) {
        this.setState({value});
    }

    handleStartDateChange(e, startDate) {
        this.setState({startDate});
    }

    handleEndDateChange(e, endDate) {
        this.setState({endDate});
    }


    render() {
        return(
            <div className='tools-container'>
                    <Grid container spacing={16}>
                        <Grid item xs={4}>
                            <div className="picker">
                                <InlineDateTimePicker
                                    keyboard
                                    label="Start Date"
                                    value={this.state.startDate}
                                    onChange={this.handleStartDateChange}
                                    onError={console.log}
                                    disablePast
                                    format="dd/MM/yyyy HH:mm"
                                    mask={[
                                        /\d/,
                                        /\d/,
                                        "/",
                                        /\d/,
                                        /\d/,
                                        "/",
                                        /\d/,
                                        /\d/,
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
                        </Grid>
                        <Grid item xs={4}>
                            <div className="picker">
                                <InlineDateTimePicker
                                    keyboard
                                    label="End Date"
                                    value={this.state.endDate}
                                    onChange={this.handleEndDateChange}
                                    onError={console.log}
                                    disablePast
                                    format="dd/MM/yyyy HH:mm"
                                    mask={[
                                        /\d/,
                                        /\d/,
                                        "/",
                                        /\d/,
                                        /\d/,
                                        "/",
                                        /\d/,
                                        /\d/,
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
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <Typography id="label">Number of Data Points: {this.state.value}</Typography>
                                <Slider
                                    // me
                                    className='slider'
                                    value={this.state.value}
                                    aria-labelledby="label"
                                    onChange={this.handleDataChange}
                                />

                            </div>
                        </Grid>
                    </Grid>


            </div>
        );
    }

}