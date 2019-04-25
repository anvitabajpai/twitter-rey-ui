import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import renderDatePicker from '../../core/DatePicker';
import renderCheckbox from '../core/Checkbox';

class renderDatePickerCheckBoxCombination extends Component {

    dynamicLabel = this.props.label;
    constructor(props) {
        super(props);
        this.dynamicLabel = this.props.label;
        this.state = {value: '',
            checked: false};
        this.handleChangeComp = this.handleChangeComp.bind(this);
        this.handleCheckComp = this.handleCheckComp.bind(this);
    }

    handleChangeComp(event) {
        this.dynamicLabel = this.props.label;
        this.props.change(this.props.nameTagNA, false);
        this.setState({value: this.format(event.target.value)});
        this.setState({checked: false});
    }

    handleCheckComp(event) {
        this.dynamicLabel = this.state.checked === true ? this.props.label : this.dynamicLabel.substring(0, this.dynamicLabel.length-2);
        this.props.change(this.props.nameTag, '');
        this.setState({checked: !(this.state.checked)});
        this.setState({value: ''});
    }

    componentWillReceiveProps( newProps ) {
        if (newProps.initialData !== '' && newProps.initialData !== undefined) {
            this.setState( { value: newProps.initialData});
            this.props.change(this.props.nameTag, newProps.initialData);
        }
        if (newProps.initialDataNA !== '' && newProps.initialDataNA !== undefined) {
            this.setState({checked: newProps.initialDataNA});
            this.props.change(this.props.nameTagNA, newProps.initialDataNA);
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
                           label={this.dynamicLabel}
                           value={this.state.value}
                           val={(this.state.value ) ? ((this.state.value !== undefined && this.state.value !== '' && this.state.value !== null) ? this.format(this.state.value) : '') : (this.props.initialData !== undefined && this.props.initialData !== '' && this.props.initialData !== null) ? this.format(this.props.initialData) : ''}/>

                </div>
                <div className="checkBoxInnerDiv">
                    <Field name={this.props.nameTagNA}
                           component={renderCheckbox}
                           onChange = {this.handleCheckComp}
                           label={this.props.checkboxlabel}
                           checked = {this.state.checked ? this.state.checked : this.props.initialDataNA} />
                </div>
            </div>
        );
    }
}

renderDatePickerCheckBoxCombination = reduxForm({
    form: ('Section1ContentRendered'), // a unique identifier for this form
    destroyOnUnmount: false
})(renderDatePickerCheckBoxCombination);


export default renderDatePickerCheckBoxCombination;