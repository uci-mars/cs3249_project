import React, {Component} from 'react';
import { InlineDateTimePicker } from "material-ui-pickers";
import Slider from "@material-ui/lab/Slider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const toolStyle = {
    padding: "20px",
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
    };

    handleChangeInStartDate (date){
        this.props.updateDates([date, this.props.dates[1]]);
    };

    handleChangeInEndDate (date) {
        this.props.updateDates([this.props.dates[0], date]);
    };

    handleChange = (event, value) => {
        this.props.updateSampleNumber( value );
    };

    render(){

        return(
            <div style={toolStyle}>

            <Container>

                <Row>
                    <Col>
                        <InlineDateTimePicker
                        style={{'paddingRight': '40px'}}
                        keyboard
                        minDate={new Date("2013-10-02T05:15:00")}
                        maxDate={new Date("2013-12-03T15:30:00")}
                        ampm={true}
                        label="Start Date"
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
                    </Col>

                    <Col>
                        <InlineDateTimePicker
                        keyboard
                        minDate={new Date("2013-10-02T05:15:00")}
                        maxDate={new Date("2013-12-03T15:30:00")}
                        ampm={true}
                        label="End Date"
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
                    </Col>

                    <Col>
                        <p style={{"margin-top": "18px"}}>Number of Data Sample: <b>{this.props.sampleNumber}</b></p>
                    </Col>

                    <Col>
                    <Slider
                        max={5995}
                        step={1}
                        style={{"width": "350px", "margin-top": "30px"}}
                        value={this.props.sampleNumber}
                        aria-labelledby="label"
                        onChange={this.handleChange}
                    />
                    </Col>
                </Row>
            </Container>


            </div>
        );

    }

}



export default Tools;
