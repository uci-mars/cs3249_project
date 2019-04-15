import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Tools extends Component {
    render(){

        return(
            <form noValidate autoComplete="on">
                <TextField
                    id="start"
                    label="Start Date"
                    type="date"
                    defaultValue={this.props.dates[0]}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="end"
                    label="End Date"
                    type="date"
                    defaultValue={this.props.dates[1]}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );

    }

}

export default Tools;