import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const toolStyle = {
    padding: "0px 0px 0px 30px",
    display: "inline-flex"
}

const typoStyle = {
    padding: "10px"
};

const sliderStyles = {
    width: 300,
    padding: "15px 0px 0px 270px",
    align: "right"
};


class Tools extends Component {

    state = {
        value: 3,
    };

    handleChangeInStartDate = name => event => {
        this.props.updateDates([event.target.value, this.props.dates[1]]);
    };

    handleChangeInEndDate = name => event => {
        this.props.updateDates([this.props.dates[0], event.target.value]);
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render(){

        const { value } = this.state;

        return(
            <div style={toolStyle}>
                <form noValidate autoComplete="on" >
                    <TextField
                        id="start"
                        label="Start Date"
                        type="date"
                        defaultValue={this.props.dates[0]}
                        onChange={this.handleChangeInStartDate('name')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="end"
                        label="End Date"
                        type="date"
                        defaultValue={this.props.dates[1]}
                        onChange={this.handleChangeInEndDate('name')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div style={sliderStyles}>
                    <Typography style={typoStyle}>No. of samples</Typography>
                    <Slider
                      value={value}
                      min={0}
                      max={6}
                      step={1}
                      onChange={this.handleChange}
                    />
                </div>   
            </div>     
        );

    }

}



export default Tools;
