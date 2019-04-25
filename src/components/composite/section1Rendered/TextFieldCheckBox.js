import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../core/Textfield';
import renderCheckbox from '../core/Checkbox';

class renderTextFieldCheckBoxCombination extends Component {

    dynamicLabel = this.props.label;
    constructor(props) {
        super(props);
        this.dynamicLabel = this.props.label;
        this.state = {value: ''};
        this.state = {checked: (this.props.nameTag === 'formI9.section1.ssn') ? false : true};
        this.handleChangeComp = this.handleChangeComp.bind(this);
        this.handleCheckComp = this.handleCheckComp.bind(this);
    }

    handleChangeComp(event) {
        this.dynamicLabel = this.props.label;
        this.props.change(this.props.nameTagNA, false);
        this.setState({value: event.target.value});
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
        this.setState( { checked: newProps.initialDataNA});
        this.props.change(this.props.nameTagNA, newProps.initialDataNA);
    }

    render() {

        return (

            <div className="outerDiv">
                <div className="textFieldInnerDiv">

                    <Field name={this.props.nameTag}
                           onChange = { this.handleChangeComp }
                           component={renderTextField}
                           label={this.dynamicLabel}
                           value={this.state.value}
                           val={this.state.value}/>

                </div>

                <div className="checkBoxInnerDiv">
                    <Field name={this.props.nameTagNA}
                           component={renderCheckbox}
                           onChange = {this.handleCheckComp}
                           label={this.props.checkboxlabel}
                           checked = {this.state.checked} />
                </div>
            </div>

        );
    }
}

renderTextFieldCheckBoxCombination = reduxForm({
    form: ('Section1ContentRendered'), // a unique identifier for this form
})(renderTextFieldCheckBoxCombination);

export default renderTextFieldCheckBoxCombination;