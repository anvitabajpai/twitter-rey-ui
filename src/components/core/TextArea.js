import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const renderTextArea = (
    { input, label, meta: { touched, error }, width},
) => (
    <FormControl error = { ((touched && error))? true : false}>
        <TextField
            label={ label }
            multiline
            rows="4"
            style = {{width: width}}
        />
        <FormHelperText style={{ display: (touched && error) ? "inline" : "none" }}>{error}</FormHelperText>
    </FormControl>
);

export default renderTextArea;



