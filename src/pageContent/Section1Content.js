import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import renderCheckbox from '../components/core/Checkbox';
import renderRadioGroup from '../components/core/Radiogroup';
import renderTextField from '../components/core/Textfield';
import renderDatePicker from '../components/core/DatePicker';
import renderReactSelect from '../components/core/ReactSelect';
import renderTextFieldCheckBoxCombination from '../components/composite/section1/TextFieldCheckBox';
import renderDatePickerCheckBoxCombination from '../components/composite/section1/DatePickerCheckBox';
import renderAddressFieldCombination from '../components/composite/section1/Address';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validations/section1/validate';
import MapUtil from '../utils/mapUtil';
import '../css/index.css'
import { load as loadI9Section1, fetch as fetchI9Section1, save as saveI9Section1 } from '../containers/Section1/actions';

var mapUtil = new MapUtil();
const AAW = 'AAW';
const LPR = 'LPR';
const CITIZEN = 'CITIZEN';
const NON_CITIZEN = 'NONCITIZEN';
const ALIEN_REG_NUM = 'alienRegNum';
const FORM_I94 = 'formI94';
const FOREIGN_PP = 'foreignpp';

class Section1Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthDate: '',
            docTypeAaw: '',
            docTypeLpr: '',
            alienIdAaw: '',
            alienIdLpr: '',
            formI94: '',
            foreignpp: '',
            issuingCountry: '',
            empAuthDoc: '',
            eligibilityType: ''
        };
        this.submitOrder = this.submitOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(event) {
        this.setState({birthDate: event.target.value});
    }

    format(input) {
        var array = (input || '').toString().split(/-/g);
        array.push(array.shift());
        return array.join('/') || null;
    };

    onChange = (type) => (event, index, value) => {
        this.setState({
            [type]: value
        })

        if (type === 'eligibilityType' && event.target.value !== LPR){
            this.props.untouch('formI9.section1.docType');
            this.props.untouch('formI9.section1.alienNumber');
        }

        if (type === 'eligibilityType' && event.target.value !== AAW){
            this.props.untouch('formI9.section1.expirationDate');
            this.props.untouch('formI9.section1.empAuthDoc');
            this.props.untouch('formI9.section1.alienNumber');
            this.props.untouch('formI9.section1.foreignPassportNo');
            this.props.untouch('formI9.section1.i94Number');
            this.props.untouch('formI9.section1.docType');
            this.props.untouch('formI9.section1.issuingCountry');
        }

        if (type === 'empAuthDoc' && event.target.value !== ALIEN_REG_NUM){
            this.props.untouch('formI9.section1.alienNumber');
            this.props.untouch('formI9.section1.docType');
        }

        if (type === 'empAuthDoc' && event.target.value !== FOREIGN_PP){
            this.props.untouch('formI9.section1.foreignPassportNo');
            this.props.untouch('formI9.section1.issuingCountry');
        }

        if (type === 'empAuthDoc' && event.target.value !== FORM_I94){
            this.props.untouch('formI9.section1.i94Number');
        }

    }

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData =
            {'formI9': {
                'section1': {
                    "middleInitialNA": true,
                    "otherFamilyNamesNA": true,
                    "emailNA": true,
                    "phoneNA": true,
                    'address': {
                        "line2NA": true
                    }
                }
            }
            }
        this.props.initialize(initData);
    }

    submitOrder(event){
        var values = this.props.formValues.Section1Content.values;
        values.formI9.section1.dob =  this.format(values.formI9.section1.dob);
        if (values.formI9.section1.expirationDate) {
           values.formI9.section1.expirationDate = this.format(values.formI9.section1.expirationDate);
        }
        this.props.saveData(values);
    }

    render() {
        const { handleSubmit, eligibilityType, empAuthDoc} = this.props;

        return (
            <form onSubmit = {handleSubmit}>

                <Divider className="break"/>

                <b>This is the Form I-9 for Mary Abinteh</b>

                <div className="break"/>

                <div className="break">
                    <div>You are asked to complete Section 1 of an electronic Form I-9. This process should only take a few</div>
                    <div>minutes to complete, and you can save your progress and come back later if needed. PDF versions of</div>
                    <div>the complete Form I-9 in both English and Spanish are available from USCIS using the links below.</div>
                </div>

                <div className="break">
                    <div>
                        <a href="https://www.talentwise.com/asset.php?AssetId=48673e6040db00f506eb14e57eef2141" rel="noopener noreferrer" target="_blank">Form I-9 Instructions - English</a>
                    </div>
                    <div>
                        <a href="https://www.talentwise.com/asset.php?AssetId=a1d5fb40fb408317ab0c58f01f32220b" rel="noopener noreferrer" target="_blank">Form I-9 Instructions - Spanish</a>
                    </div>
                    <div>
                        <a href="https://www.talentwise.com/asset.php?AssetId=1463403262e208f05d1348c30a3024d5" rel="noopener noreferrer" target="_blank">Form I-9 PDF - English</a>
                    </div>
                    <div>
                        <a href="https://www.talentwise.com/asset.php?AssetId=bd9e3d953d3b8f0eae3e5a9b6e692368" rel="noopener noreferrer" target="_blank">Form I-9 PDF - Spanish</a>
                    </div>
                </div>

                <div><b>Read instructions carefully before completing this form. The instructions can be viewed using</b></div>
                <div><b>the link above.</b></div>

                <div className="break" />

                <div className="break">
                    <div><b>Anti-Discrimination Notice:</b> It is illegal to discriminate against work-authorized individuals. Employers</div>
                    <div><b>CANNOT</b> specify which document(s) they will accept from an employee. The refusal to hire an individual </div>
                    <div>because the documentation presented has a future expiration date may also constitute illegal </div>
                    <div>discrimination.</div>
                </div>

                <Divider className="break"/>

                <h2>Employee information and Attestation</h2>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="formI9.section1.givenName"
                           component={renderTextField}
                           label="First Name *"/>
                </div>


                <div className="outerDiv nonBreakingSpace">
                    <Field name="middleInitial"
                           nameTag="formI9.section1.middleInitial"
                           nameTagNA="formI9.section1.middleInitialNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Middle Name *"
                           checkboxlabel = "No Middle Name"/>
                </div>


                <div className="outerDiv">
                    <Field name="formI9.section1.familyName"
                           component={renderTextField}
                           label="Last Name *" />
                </div>


                <div className="doubleBreak">
                    <Field name="otherLastNames"
                           nameTag="formI9.section1.otherFamilyNames"
                           nameTagNA="formI9.section1.otherFamilyNamesNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Other Last Name Used (if any) *"
                           checkboxlabel = "No Other Names"/>
                </div>

                <Divider/>

                <div className="break">
                    <Field name="ssn"
                           nameTag="formI9.section1.ssn"
                           nameTagNA="formI9.section1.awaitingSSN"
                           component={renderTextFieldCheckBoxCombination}
                           label="Social Security Number *"
                           checkboxlabel = "Awaiting SSN"/>
                </div>


                <div className="doubleBreak">
                    <Field name="formI9.section1.dob"
                           onChange={this.handleChange}
                           val={this.state.birthDate}
                           component={renderDatePicker}
                           label="Date Of Birth (MM/DD/YYYY) *"/>
                </div>


                <Divider className="break"/>

                <h2>Address</h2>

                <div className="doubleBreak">
                    <Field name="address"
                           addressNameTag = "formI9.section1.address.line1"
                           unitNameTag = "formI9.section1.address.line2"
                           unitNameTagNA = "formI9.section1.address.line2NA"
                           countryNameTag = "formI9.section1.address.countryCode"
                           stateNameTag = "formI9.section1.address.regionCode"
                           cityNameTag = "formI9.section1.address.municipality"
                           zipNameTag = "formI9.section1.address.postalCode"
                           width={260}
                           component={renderAddressFieldCombination}/>
                </div>

                <Divider className="break"/>

                <h2 className="break">Contact Information</h2>

                <div>
                    You may provide your email address and telephone number. Department of Homeland Security (DHS) may
                    <br/>
                    contact you if DHS learns of a potential mismatch between the information provided and the information
                    in the <br/>
                    DHS or Social Security Administration (SSA) records. You may select "Do not provide to DHS" if you
                    choose <br/>
                    not to provide this information.
                </div>


                <div>
                    <Field name="email"
                           nameTag="formI9.section1.email"
                           nameTagNA="formI9.section1.emailNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Email *"
                           checkboxlabel = "Do not provide to DHS"/>
                </div>

                <div className="doubleBreak">
                    <Field name="phone"
                           nameTag="formI9.section1.phone"
                           nameTagNA="formI9.section1.phoneNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Telephone Number *"
                           checkboxlabel = "Do not provide to DHS"/>
                </div>

                <Divider className="doubleBreak" />


                <div><b>I attest, under penalty of perjury, that I am:</b></div>
                <div >(check one of the following) *</div>

                <div>
                    <Field name="formI9.section1.eligibilityType"
                           optionVals={mapUtil.section1EligibilityTypeOptions}
                           component={renderRadioGroup}
                           onChange={this.onChange("eligibilityType")}/>
                </div>

                {eligibilityType === LPR && <div>
                    <div>
                        <a href="https://www.talentwise.com/asset.php?Name=AlienNumberI766.png" rel="noopener noreferrer" target="_blank">
                            Alien Registration Number?
                        </a>
                    </div>

                    <div className="outerDiv nonBreakingSpace doubleBreak">
                       <Field name="formI9.section1.docType"
                                   nameTag="docType"
                                   ref="docType"
                                   component={renderReactSelect}
                                   onChange={this.onChange("docTypeLpr")}
                                   width={260}
                                   label="Document Type *"
                                   suggestions={mapUtil.section1DocumentTypes}/>
                    </div>

                    <Field name="formI9.section1.alienNumber"
                           onChange={this.onChange("alienIdLpr")}
                           component={renderTextField}
                           label="Alien Reg. Number/USCIS Number *"/>
                    <div className="doubleBreak"/>

                </div>}

                {eligibilityType === AAW && <div>
                    <div className="break negativeMarginTop">
                        <Field name="workAuthExpDate"
                               nameTag="formI9.section1.expirationDate"
                               nameTagNA="formI9.section1.expirationDateNA"
                               component={renderDatePickerCheckBoxCombination}
                               label="Work Auth Exp Date *"
                               checkboxlabel="N/A - Check this box if your work authorization does not expire, such as refugees, asylees, and certain citizens of the Federated States of Micronesia, the Republic of the Marshal Islands, or Palau."/>
                    </div>

                    <div className="break">
                    <span>
                        <span>For alien authorized to work, provide your, </span>
                        <a href="https://www.talentwise.com/asset.php?Name=AlienNumberI766.png" rel="noopener noreferrer" target="_blank">Alien Registration Number/USCIS Number</a>
                        <span>, </span>
                        <a href="https://www.talentwise.com/asset.php?Name=Admission Number.png" rel="noopener noreferrer" target="_blank">Form I-94 Admission Number</a>, or Foreign Passport Number with Country of Issuance.
                    </span>
                    </div>


                    <div>Select one: *</div>
                    <div>
                        <Field name="formI9.section1.empAuthDoc"
                               optionVals={mapUtil.section1EmpAuthDocOptions}
                               component={renderRadioGroup}
                               onChange={this.onChange("empAuthDoc")}/>
                    </div>

                </div>}

                {empAuthDoc === ALIEN_REG_NUM && !(eligibilityType === CITIZEN || eligibilityType === NON_CITIZEN || eligibilityType === LPR) && <div>
                    <div className="break">
                        <a href="https://www.talentwise.com/asset.php?Name=AlienNumberI766.png" rel="noopener noreferrer" target="_blank">Alien
                            Registration Number?</a>
                    </div>
                    <div className="outerDiv nonBreakingSpace negativeMarginTop doubleBreak">
                       <Field name="formI9.section1.docType"
                                   nameTag="docType"
                                   ref="docType"
                                   component={renderReactSelect}
                                   onChange={this.onChange("docTypeAaw")}
                                   width={260}
                                   label="Document Type *"
                                   suggestions={mapUtil.section1DocumentTypes}/>
                    </div>


                    <Field name="formI9.section1.alienNumber"
                           onChange={this.onChange("alienIdAaw")}
                           component={renderTextField}
                           label="Alien Reg. Number/USCIS Number *"/>

                    <div className="doubleBreak"/>
                </div>}


                {empAuthDoc === FORM_I94  && !(eligibilityType === CITIZEN || eligibilityType === NON_CITIZEN || eligibilityType === LPR) && <div>
                    <div className="doubleBreak negativeMarginTop">
                        <Field name="formI9.section1.i94Number"
                               onChange={this.onChange("formI94")}
                               component={renderTextField}
                               label="Form I-94 Admission Number *"/>
                        <a href="https://www.talentwise.com/asset.php?Name=Admission Number.png" rel="noopener noreferrer" target="_blank">Admission
                            Number? </a>
                    </div>
                </div>}


                {empAuthDoc === FOREIGN_PP  && !(eligibilityType === CITIZEN || eligibilityType === NON_CITIZEN || eligibilityType === LPR) && <div>

                    <div className="outerDiv nonBreakingSpace negativeMarginTop">
                        <Field name="formI9.section1.foreignPassportNo"
                               onChange={this.onChange("foreignpp")}
                               component={renderTextField}
                               label="Foreign Passport Number *"/>
                    </div>

                    <div className="outerDiv">
                    <Field name="formI9.section1.issuingCountry"
                           nameTag="issuingCountry"
                           ref="issuingCountry"
                           component={renderReactSelect}
                           onChange={this.onChange("issuingCountry")}
                           width={260}
                           suggestions={mapUtil.countries}
                           label="Country of Issuance *"/>
                    </div>

                    <div className="doubleBreak"/>

                </div>
                }

                <Divider className="doubleBreak"/>

                <div className="doubleBreak">
                    <b>I am aware that federal law provides for imprisonment and/or fines for false statements or use of
                        <br/>false documents in connection with the completion of this form.</b>
                </div>

                <div className="break">
                    <Field name="formI9.section1.acknowledgement"
                           component={renderCheckbox}
                           label="I acknowledge *"/>
                </div>

                <Divider className="doubleBreak"/>

                <div>
                    <button className="button left"  onClick={this.props.valid ? this.submitOrder : void(0)} >Submit</button>
                    <button className="button right">Save</button>
                </div>
            </form>
        );
    }
}

Section1Content = reduxForm({
        form: 'Section1Content', // a unique identifier for this form
        validate,
})(Section1Content);

//  Decorated with connect to read form values (in this particular context, this is being used in the form above for the purpose of conditional rendering of fields)
const selector = formValueSelector('Section1Content') // <-- same as form name

function mapDispatchToProps(dispatch) {
    return {fetchData: bindActionCreators(fetchI9Section1, dispatch),
            loadData:  bindActionCreators(loadI9Section1, dispatch),
            saveData:  bindActionCreators(saveI9Section1, dispatch)};
}

function mapStateToProps(state) {
    //console.log(state);
    const eligibilityType = selector(state, 'formI9.section1.eligibilityType')
    const empAuthDoc = selector(state, 'formI9.section1.empAuthDoc')
    return {
        eligibilityType,
        empAuthDoc,
        initialValues:state.i9Section1.data,
        i9sec1data: state.i9Section1.i9data,
        formValues: state.form
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section1Content);





