import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import renderDatePicker from '../../core/DatePicker';

class renderDatePickerSimple extends Component {

    dynamicLabel = this.props.label;
    constructor(props) {
        super(props);
        this.dynamicLabel = this.props.label;
        this.state = {value: ''}
        this.handleChangeComp = this.handleChangeComp.bind(this);
    }

    handleChangeComp(event) {
        this.setState({value: this.format(event.target.value)});
    }

    componentWillReceiveProps( newProps ) {
        if (newProps.initialData !== '' && newProps.initialData !== undefined) {
            this.setState( { value: newProps.initialData});
        }
    }

    format(input) {
        return input.replace(/(..).(..).(....)/, "$3-$1-$2");
    };

    render() {
        return (
            <div className="outerDiv">
                <div className="textFieldInnerDiv">
                    <Field name={this.props.nameTag}
                           onChange = { this.handleChangeComp }
                           component={renderDatePicker}
                           label={this.props.label}
                           value={this.state.value}
                           val={this.state.value ? this.format(this.state.value) :this.format(this.props.initialData)}/>

                </div>
            </div>
        );
    }
}

renderDatePickerSimple = reduxForm({
    form: ('Section1ContentRendered'), // a unique identifier for this form
    destroyOnUnmount: false
})(renderDatePickerSimple);


export default renderDatePickerSimple;