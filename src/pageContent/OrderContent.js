import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Divider from 'material-ui/Divider';
import renderReactSelect from '../components/core/ReactSelect';
import renderTextField from '../components/core/Textfield';
import renderDatePicker from '../components/core/DatePicker';
import renderTextFieldCheckBoxCombination from '../components/composite/order/TextFieldCheckBox';
import validate from '../validations/order/validate';
import MapUtil from '../utils/mapUtil';
import '../css/index.css';

var mapUtil = new MapUtil();
class OrderContent extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChangeComp = this.handleChangeComp.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder = function (e) {
    }

    componentDidMount() {
        this.handleInitialize();
    }

    handleChangeComp(event) {
        this.setState({value: event.target.value});
    }

    handleInitialize() {
        const initData = {
            "middleInitialInitiatorNA": true,
            "middleInitialCandidateNA": true,
            "middleInitialVerifierNA": true
        };
        this.props.initialize(initData);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Divider/>

                <div className="outerDiv nonBreakingSpace">
                <Field name="hireDate"
                      component={renderDatePicker}
                      onChange = { this.handleChangeComp }
                      value={this.state.value}
                      val={this.state.value}
                      label="Hire Date (MM/DD/YYYY) *"/>
                </div>

                <div className="outerDiv nonBreakingSpace doubleBreak">
                <Field name="orderType"
                           nameTag="orderType"
                           component={renderReactSelect}
                           width={260}
                           suggestions={mapUtil.orderTypes}
                           label="Order Type *"/>
                </div>

                <Divider/>

                <br/>
                <h2>Initiator</h2>
                <div className="outerDiv nonBreakingSpace">
                    <Field name="firstNameInitiator" component={renderTextField} label="First Name *"/>
                </div>


                <div className="outerDiv nonBreakingSpace">
                    <Field name="middleInitialInitiator"
                           nameTag="middleInitialInitiator"
                           nameTagNA="middleInitialInitiatorNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Middle Name *"
                           checkboxlabel = "No Middle Name"/>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="lastNameInitiator" component={renderTextField} label="Last Name *"/>
                </div>

                <div className="doubleBreak">
                    <Field name="emailInitiator" component={renderTextField} label="Email *"/>
                </div>

                <Divider className="break"/>

                <h2>Candidate</h2>
                <div className="outerDiv nonBreakingSpace">
                    <Field name="firstNameCandidate" component={renderTextField} label="First Name *"/>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="middleInitialCandidate"
                           nameTag="middleInitialCandidate"
                           nameTagNA="middleInitialCandidateNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Middle Name *"
                           checkboxlabel = "No Middle Name"/>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="lastNameCandidate" component={renderTextField} label="Last Name *"/>
                </div>


                <div className="doubleBreak">
                    <Field name="emailCandidate" component={renderTextField} label="Email *"/>
                </div>

                <Divider className="break"/>

                <h2>Verifier</h2>
                <div className="outerDiv nonBreakingSpace">
                    <Field name="firstNameVerifier" component={renderTextField} label="First Name *"/>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="middleInitialVerifier"
                           nameTag="middleInitialVerifier"
                           nameTagNA="middleInitialVerifierNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Middle Name *"
                           checkboxlabel = "No Middle Name"/>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="lastNameVerifier" component={renderTextField} label="Last Name *"/>
                </div>


                <div className="doubleBreak">
                    <Field name="emailVerifier" component={renderTextField} label="Email *"/>
                </div>

                <Divider className="doubleBreak"/>

                <div>
                    <button className="button left" onClick={this.submitOrder}>Submit</button>
                    <button className="button right">Save</button>
                </div>

            </form>
        );
    }
};

export default reduxForm({
    form: ('OrderContent'), // a unique identifier for this form
    validate,
})(OrderContent);
