import React from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';

const renderRadioGroup = ({ input, ...rest, meta: { touched, error } }) => (
    <div>
        <RadioButtonGroup
            {...input}
            {...rest}
            valueSelected={input.value}
            errorText={touched && error}
            style={{ border: touched && error ? "1.5px solid red" : "none" }}
        />
        <br/>
        <span className='error-text' style={{ display: touched && error ? "inline" : "none" }}>{error}</span>
    </div>
);

export default renderRadioGroup;