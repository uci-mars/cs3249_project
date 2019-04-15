import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const toolStyle = {
    padding: "0px 0px 0px 30px",
    display: "inline-flex"
}

const sliderStyles = {
    width: 300,
    padding: "40px 0px 0px 270px",
    align: "right"
};


class Tools extends Component {

    state = {
        value: 3,
    };

    handleChangeInDate() {
        this.props.updateDates(event.target.value);
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
                        
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div style={sliderStyles}>
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
