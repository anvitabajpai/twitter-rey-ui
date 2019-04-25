import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import '../../css/index.css';

const renderCheckbox = ({ input, meta: { touched, error },label, hide}) => (
    <div>
        <Checkbox
            {...input}
            label={label}
            checked={input.value ? true : false}
            onCheck={input.onChange}
            style={{ border: touched && error ? "1.5px solid red" : "none" }}
            className="zIndexCustom"
        />
        <br/>
        <span className='error-text' style={{ display: touched && error ? "inline" : "none" }}>{error}</span>
    </div>
)

export default renderCheckbox;