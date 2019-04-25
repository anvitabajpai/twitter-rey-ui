import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const renderCheckbox = ({input, props, label, checked}) => {
    let newProps = Object.assign({}, props, {
        checked: checked,
    });
    return <Checkbox {...newProps}
                     label={label}
                     onCheck= {input.onChange}/>
};

export default renderCheckbox;

