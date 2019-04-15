import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
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
        value: this.props.sampleNumber,
    };

    handleChangeInStartDate = name => event => {
        this.props.updateDates([event.target.value, this.props.dates[1]]);
    };

    handleChangeInEndDate = name => event => {
        this.props.updateDates([this.props.dates[0], event.target.value]);
    };

    handleChangeSlider = (event, value) => {
        this.setState({ value });
        this.props.updateSampleNumber(this.state.value);
    };

    formatDate(date){
        return date.toISOString();
    }


    render(){

        const { value } = this.state;

        return(
            <div style={toolStyle}>
                <form noValidate autoComplete="on" >
                    <TextField
                        id="start"
                        label="Start Date"
                        type="datetime-local"
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
                        type="datetime-local"
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
                      min={100}
                      max={5995}
                      step={100}
                      onChange={this.handleChangeSlider}
                    />
                </div>   
            </div>     
        );

    }

}



export default Tools;
