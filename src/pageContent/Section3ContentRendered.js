import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import renderCheckbox from '../components/core/Checkbox';
import renderReactSelect from '../components/core/ReactSelect';
import RadioButtonsGroup from '../components/custom/Radiogroup';
import renderTextField from '../components/core/Textfield';
import renderTextArea from '../components/core/TextArea';
import renderDatePicker from '../components/core/DatePicker';
import renderAddressFieldCombination from '../components/composite/section2/Address';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import store from '../utils/store';
import validate from '../validations/section2/validate';
import MapUtil from '../utils/mapUtil';
import '../css/index.css'

var mapUtil = new MapUtil();
class Section3ContentRendered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hireDate: '',
            listAOrBCDocType:''
        };
        this.submitOrder = this.submitOrder.bind(this);
        this.handleInitialize = this.handleInitialize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delegateVerifier = this.delegateVerifier.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(event) {
        this.setState({hireDate: event.target.value});
    }

    delegateVerifier(event) {
        alert('Delegated to another verifier');
    }

    submitOrder = function (e) {
        const values = this.state.form ? this.state.form.Section2Content.values : '';
        var format = function (input) {
            var array = (input || '').toString().split(/-/g);
            array.push(array.shift());
            return array.join('/') || null;
        };

        if (this.props.valid === true) {
            var url = "//localhost:9000/i9/section2";

            /* ------------- Formatting the hireDate to mm/dd/yyyy format ------------ */
            if(values.i9.section2.employerCert.hireDate) {
                values.i9.section2.employerCert.hireDate =  format(values.i9.section2.employerCert.hireDate);
            }

            const currentFormValuesJSON = JSON.stringify(store.getState().form.Section2Content.values);

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: currentFormValuesJSON
            }).then(res => res.ok ? res.json() : Promise.reject(res));
        }
    }

    onChange = (type) => (event, index, value) => {
        this.setState({
            [type]: value
        })

        if (type === 'listAOrBCDocType' && event.target.value !== 'A'){
            this.props.untouch('i9.section2.section2Doc.listBDocs.docTitle');
            this.props.untouch('i9.section2.section2Doc.listCDocs.docTitle');
            this.props.untouch('i9.section2.section2Doc.listBDocs.receipt');
            this.props.untouch('i9.section2.section2Doc.lisCDocs.receipt');
        }

        if (type === 'listAOrBCDocType' && event.target.value !== 'BC'){
            this.props.untouch('i9.section2.section2Doc.listADocs.docTitle');
            this.props.untouch('i9.section2.section2Doc.lisADocs.receipt');
        }
    }

    componentDidMount() {
        this.handleInitialize();
    }
    handleInitialize() {
        const initData =
            {'i9': {
                'section2': {
                    'employerCert': {
                        'orgAddress': {
                            "line2NA": true
                        }
                    }
                }
            }
            }
        this.props.initialize(initData);
    }


    render() {
        const LISTA = 'A';
        const LISTBC = 'BC';
        const {handleSubmit, listAOrBCDocType } = this.props;

        return (
            <form onSubmit = {handleSubmit}>

                <Divider className="break"/>

                <div className="break">If you will not be able to complete this task, you may <a href="https://www.talentwise.com/asset.php?AssetId=48673e6040db00f506eb14e57eef2141" rel="noopener noreferrer" target="_blank">Delegate to another Verifier</a></div>

                <div className="break">
                    <div>You must physically examine one document from List A OR examine a combination of one document from</div>
                    <div>List B and one document from List C. For each document you review, record the following information:</div>
                    <div>document title, issuing authority, document number, and expiration date, if any.</div>
                </div>

                <div className="break">
                    <div>PDF versions of the complete Form I-9 in both English and Spanish are available from USCIS using the </div>
                    <div>links below.</div>
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

                <Divider className="break"/>

                <div>
                    <h2>Employer or Authorized Representative Review and Verification</h2>
                </div>


                <Field name="i9.section2.section2Doc.docType"
                       component={RadioButtonsGroup}
                       onChange={this.onChange("listAOrBCDocType")}/>

                {listAOrBCDocType  === LISTA && <div>

                    <Divider className="break"/>

                    <div>
                        <h2>List A Documents</h2>
                    </div>
                    <div className="doubleBreak">
                        <Field name="i9.section2.section2Doc.listADocs.docTitle"
                               component={renderReactSelect}
                               label="List A Document Title *"
                               width={770}
                               suggestions={mapUtil.listADocuments}/>
                    </div>

                    <div className="break">
                        <Field name="i9.section2.section2Doc.listADocs.receipt"
                               component={renderCheckbox}
                               label="Receipt for a document that was lost, stolen, or damaged"/>
                    </div>

                </div>}


                {listAOrBCDocType  === LISTBC && <div>

                    <Divider className="break"/>

                    <div>
                        <h2>List B Documents</h2>
                    </div>
                    <div className="doubleBreak">
                        <Field name="i9.section2.section2Doc.listBDocs.docTitle"
                               component={renderReactSelect}
                               label="List B Document Title *"
                               width={770}
                               suggestions={mapUtil.listBDocuments}/>
                    </div>

                    <div className="break">
                        <Field name="i9.section2.section2Doc.listBDocs.receipt"
                               component={renderCheckbox}
                               label="Receipt for a document that was lost, stolen, or damaged"/>
                    </div>

                    <Divider className="break"/>

                    <div>
                        <h2>List C Documents</h2>
                    </div>
                    <div className="doubleBreak">
                        <Field name="i9.section2.section2Doc.listCDocs.docTitle"
                               component={renderReactSelect}
                               label="List C Document Title *"
                               width={770}
                               suggestions={mapUtil.listCDocuments}/>
                    </div>

                    <div className="break">
                        <Field name="i9.section2.section2Doc.listCDocs.receipt"
                               component={renderCheckbox}
                               label="Receipt for a document that was lost, stolen, or damaged"/>
                    </div>

                </div>}

                <Divider className="break"/>

                <div className="break">
                    <h2>Additional Information</h2>
                </div>

                <div className="break">Use this space to notate any additional information required for Form I-9 such as:</div>
                <ul>
                    <li className="fontFamilyCustom break">
                        <div>Employment authorization extensions for Temporary Protected Status beneficiaries, F-1 OPT STEM </div>
                        <div>students, CAP-GAP, H-1B and H-2A employees continuing employment with the same employer or </div>
                        <div>changing employers, and other nonimmigrant categories that may receive extensions of stay </div>
                    </li>
                    <li className="fontFamilyCustom break">Additional document(s) that certain nonimmigrant employees may present</li>
                    <li className="fontFamilyCustom break">Discrepancies that E-Verify employers must notate when participating in the IMAGE program</li>
                    <li className="fontFamilyCustom break">Employee termination dates and form retention dates</li>
                    <li className="fontFamilyCustom break">Any other comments or notations necessary for the employer's business process</li>
                </ul>


                <div className="doubleBreak">
                    <Field name="i9.section2.additionalInfo"
                           component={renderTextArea}
                           label="Additional Information"
                           width={770}
                           suggestions={mapUtil.listADocuments}/>
                </div>

                <Divider className="break"/>

                <div >
                    <h2>Certification</h2>
                </div>



                <div className="doubleBreak">
                    <Field name="i9.section2.employerCert.hireDate"
                           onChange={this.handleChange}
                           value={this.state.hireDate}
                           val={this.state.hireDate}
                           component={renderDatePicker}
                           width={420}
                           label="Employee's first day of employment *"/>
                </div>

                <div className="doubleBreak">
                    <Field name="i9.section2.employerCert.position"
                           component={renderTextField}
                           width={420}
                           label="Title of Employer or Authorized Representative is required *"/>
                </div>


                <div className="doubleBreak">
                    <Field name="i9.section2.employerCert.orgName"
                           component={renderTextField}
                           width={420}
                           label="Employer's Business or Organization Name is required *" />
                </div>

                <div className="doubleBreak">
                    <Field name="i9.section2.employerCert.givenName"
                           component={renderTextField}
                           width={420}
                           label="First Name of Employer or Authorized Representative *"/>
                </div>


                <div className="doubleBreak">
                    <Field name="i9.section2.employerCert.familyName"
                           component={renderTextField}
                           width={420}
                           label="Last Name of Employer or Authorized Representative *" />
                </div>

                <div className="doubleBreak">
                    <Field name="address"
                           addressNameTag = "i9.section2.employerCert.orgAddress.line1"
                           unitNameTag = "i9.section2.employerCert.orgAddress.line2"
                           unitNameTagNA = "i9.section2.employerCert.orgAddress.line2NA"
                           countryNameTag = "i9.section2.employerCert.orgAddress.countryCode"
                           stateNameTag = "i9.section2.employerCert.orgAddress.stateCode"
                           cityNameTag = "i9.section2.employerCert.orgAddress.regionCode"
                           zipNameTag = "i9.section2.employerCert.orgAddress.postalCode"
                           component={renderAddressFieldCombination}/>
                </div>

                <div className="doubleBreak">
                    <div><b>I attest, under penalty of perjury, that</b></div>
                    <div style={{marginLeft:30}}>
                        <div><b>1. I have examined the documents(s) presented by the above-named employee,</b></div>
                        <div><b>2. the above-listed document(s) appear to be genuine and do relate to the employee named, and</b></div>
                        <div><b>3. to the best of my knowledge the employee is authorized to work in the United States.</b></div>
                    </div>
                </div>

                <div className="break">
                    <Field name="i9.section2.acknowledgement"
                           component={renderCheckbox}
                           label="I acknowledge *"/>
                </div>

                <Divider className="doubleBreak"/>

                <div>
                    <button className="button left" onClick={this.submitOrder}>Submit</button>
                    <button className="button right">Save</button>
                </div>
            </form>
        );
    }
}

Section3ContentRendered = reduxForm({
    form: 'Section3ContentRendered', // a unique identifier for this form
    validate,
})(Section3ContentRendered);

// Decorated with connect to read form values
const selector = formValueSelector('Section3ContentRendered') // <-- same as form name
Section3ContentRendered = connect(
    state => {
        // can select values individually
        const listAOrBCDocType = selector(state, 'i9.section2.section2Doc.docType')
        return {
            listAOrBCDocType
        }

    }
)(Section3ContentRendered)

export default Section3ContentRendered