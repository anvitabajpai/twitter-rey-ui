import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class renderSelectField extends React.Component {

    render() {
        const {meta: { touched, error }, width} = this.props;

        return (
            <FormControl error = {((touched && error)) ? true : false}>
            <InputLabel>{this.props.label}</InputLabel>
            <Select
            {...this.props.input}
            style = {{width: width}}
            autoWidth
             >
               {(this.props.selectDropDownContent).map(option => (
                   <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
               ))}
        </Select>
        <FormHelperText style={{ display: ((touched && error)) ? "inline" : "none" }}>{(touched && error)}</FormHelperText>
    </FormControl>


        );
    }
}

export default renderSelectField;


