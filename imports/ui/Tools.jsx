import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Tools extends Component {
    render(){

        return(
            <form noValidate autoComplete="on">
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            

                <TextField
                    id="outlined-name"
                    label="End Date"

                    margin="normal"
                    variant="outlined"
                />

            </form>

        );

    }

}

export default Tools;