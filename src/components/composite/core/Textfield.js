import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const renderTextField = (
    { input, label, meta: { touched, error }, val},
) => (
    <FormControl error = { ((touched && error))? true : false}>
        <TextField
            label={ label }
            error={(touched && (error ? true : false))? true : false}
            {...input}
            value = {val || ''}
            style = {{width: 260}}
        />
        <FormHelperText style={{ display: (touched && error)? "inline" : "none" }}>{error}</FormHelperText>
    </FormControl>
);

export default renderTextField;
