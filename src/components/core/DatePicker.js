import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const renderDatePicker = (
    { input, label, meta: { touched, error }, val, width, initialData}) => (
    <FormControl error = { ((touched && error))? true : false}>
        <TextField
            type="date"
            format="MM/DD/YYYY"
            label={ label }
            error={(touched && error ? true : false)}
            {...input}
            value = {val || ''}
            style = {{width: width ? width : 260}}
        />
        <FormHelperText style={{ display: (touched && error)? "inline" : "none" }}>{error}</FormHelperText>
    </FormControl>
);

export default renderDatePicker;
