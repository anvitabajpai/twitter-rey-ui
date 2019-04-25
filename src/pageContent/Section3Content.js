import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import renderCheckbox from '../components/core/Checkbox';
import renderTextFieldCheckBoxCombination from '../components/composite/section3/TextFieldCheckBox';
import renderDatePicker from '../components/core/DatePicker';
import renderTextField from '../components/core/Textfield';
import renderReactSelect from '../components/core/ReactSelect';
import renderTextArea from '../components/core/TextArea';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import validate from '../validations/section3/validate';
import MapUtil from '../utils/mapUtil';
import '../css/index.css'
import { load as loadI9Section2, fetch as fetchI9Section2, save as saveI9Section2 } from '../containers/Section3/actions';

var mapUtil = new MapUtil();
class Section3Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hireDate: '',
            rehireDate:'',
            listAOrBCDocType:''
        };
        //this.submitOrder = this.submitOrder.bind(this);
        this.handleInitialize = this.handleInitialize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delegateVerifier = this.delegateVerifier.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange = (type) => (event, index, value) => {
        this.setState({
            [type]: event.target.value
        })
    }

    delegateVerifier(event) {
        alert('Delegated to another verifier');
    }

    onChange = (type) => (event, index, value) => {
        this.setState({
            [type]: value
        })

        if (type === 'listAOrBCDocType' && event.target.value !== 'A'){
            this.props.untouch('i9.section2.section2Doc.listBDoc.docTitle');
            this.props.untouch('i9.section2.section2Doc.listCDoc.docTitle');
            this.props.untouch('i9.section2.section2Doc.listBDoc.receipt');
            this.props.untouch('i9.section2.section2Doc.lisCDoc.receipt');
        }

        if (type === 'listAOrBCDocType' && event.target.value !== 'BC'){
            this.props.untouch('i9.section2.section2Doc.listADocs[0].docTitle');
            this.props.untouch('i9.section2.section2Doc.listADocs[0].receipt');
            this.props.untouch('i9.section2.section2Doc.listADocs[0].issuingAuthority');
            this.props.untouch('i9.section2.section2Doc.listADocs[0].docNumber');
            this.props.untouch('i9.section2.section2Doc.listADocs[0].expiryDate');
        }
    }

    componentDidMount() {
        this.handleInitialize();
    }
    handleInitialize() {
        const initData =
            {'formI9': {
                'section3': {
                    "givenNameNA": true,
                    "middleNameNA": true,
                    "familyNameNA": true,
                }
              }
            }
        this.props.initialize(initData);
    }


    render() {
        const LISTA = 'A';
        const LISTBC = 'BC';
        const {handleSubmit, listAOrBCDocType, docTitle } = this.props;

        return (
            <form onSubmit = {handleSubmit}>

                <Divider className="break"/>

                <div className="break">If you will not be able to complete this task, you may <a href="https://www.talentwise.com/asset.php?AssetId=48673e6040db00f506eb14e57eef2141" rel="noopener noreferrer" target="_blank">Delegate to another Verifier</a></div>

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

                <div className="break">
                   <h2>Reverification and Rehires</h2>
                </div>

                <div className="break"><b>Employee Name from Section 1: David Scott</b></div>

                <div className="break"><b>A. New Name (if applicable)</b></div>

                <div className="break">
                    <div>Complete Block A if an employee's name has changed at the time you complete Section 3. Enter only the part </div>
                    <div>of the name that has changed.</div>
                </div>
                <div className="break">
                    <div>For example: If the employee changed only his or her last name, enter the updated last name in the Last </div>
                    <div>Name field, then select "Name has not changed" checkbox for the First Name field.</div>
                </div>

                <div className="outerDiv nonBreakingSpace">
                    <Field name="formI9.section3.givenName"
                           nameTag="formI9.section3.givenName"
                           nameTagNA="formI9.section3.givenNameNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="First Name *"
                           checkboxlabel = "Name has not changed"/>
                </div>


                <div className="outerDiv nonBreakingSpace">
                    <Field name="formI9.section3.middleName"
                           nameTag="formI9.section3.middleName"
                           nameTagNA="formI9.section3.middleNameNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Middle Name *"
                           checkboxlabel = "No Middle Name or Not changed "/>
                </div>

                <div className="outerDiv nonBreakingSpace doubleBreak">
                    <Field name="formI9.section3.familyName"
                           nameTag="formI9.section3.familyName"
                           nameTagNA="formI9.section3.familyNameNA"
                           component={renderTextFieldCheckBoxCombination}
                           label="Last Name *"
                           checkboxlabel = "Name has not changed"/>
                </div>

                <div className="break"><b>B. Date of Rehire (if applicable)</b></div>

                <div className="doubleBreak">
                    <Field name="formI9.section3.rehireDate"
                           onChange={this.handleChange("rehireDate")}
                           value={this.state.rehireDate}
                           val={this.state.rehireDate}
                           component={renderDatePicker}
                           width = {270}
                           label="Employee's first day of employment *"/>
                </div>

                <div className="break"><b>C. Reverification (if applicable)</b></div>

                <div className="break">
                    <div>If the employee's previous grant of employment authorization has expired, provide the information for the  </div>
                    <div>document from the List A or List C the employee presented that establishes current employment </div>
                    <div>authorization.</div>
                </div>

                <div className="break">To complete Block C:</div>
                <ul>
                    <li className="fontFamilyCustom break">
                        <div>Examine either List A or List C document the employee presents that shows that the employee is </div>
                        <div>currently authorized to work in the United States; and </div>
                    </li>
                    <li className="fontFamilyCustom break">Record the document title, document number, and expiration date (if any)</li>
                </ul>


                <div className="doubleBreak">
                    <Field name="formI9.section3.document.docTitle"
                           component={renderReactSelect}
                           label="List A/C Document Title *"
                           width={770}
                           suggestions={mapUtil.listACDocuments}/>
                </div>

                <div>
                    <Field name="formI9.section3.document.receipt"
                           component={renderCheckbox}
                           label="Receipt for a document that was lost, stolen, or damaged"/>
                </div>

                <div className="break" />
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
                    <Field name="formI9.section3.additionalInfo"
                           component={renderTextArea}
                           label="Additional Information"
                           width={770}
                           suggestions={mapUtil.listADocuments}/>
                </div>

                <Divider className="break"/>

                <div className="break" >
                    <h2>Certification</h2>
                </div>

                <div className="break">
                    <Field name="formI9.section3.verifierGivenName"
                           component={renderTextField}
                           label="First Name of Verifier *"/>
                </div>

                <div className="doubleBreak">
                    <Field name="formI9.section3.verifierFamilyName"
                           component={renderTextField}
                           label="Last Name of Verifier *" />
                </div>


                <div className="doubleBreak">
                    <div><b>I attest, under penalty of perjury, that</b></div>
                     <div style={{marginLeft:30}}>
                         <div><b>1. I have examined the documents(s) presented by the above-named employee,</b></div>
                         <div><b>2. the above-listed document(s) appear to be genuine and do relate to the employee named, and</b></div>
                         <div><b>3. to the best of my knowledge the employee is authorized to work in the United States.</b></div>
                    </div>
                </div>

                <div className="doubleBreak">
                    <Field name="formI9.section3.acknowledgement"
                           component={renderCheckbox}
                           label="I acknowledge *"/>
                </div>

                <Divider className="doubleBreak"/>

                <div>
                    <button className="button left" /*onClick={this.submitOrder}*/>Submit</button>
                    <button className="button right">Save</button>
                </div>
            </form>
        );
    }
}

Section3Content = reduxForm({
    form: 'Section3Content', // a unique identifier for this form
    validate,
})(Section3Content);

//  Decorated with connect to read form values (in this particular context, this is being used in the form above for the purpose of conditional rendering of fields)
const selector = formValueSelector('Section3Content') // <-- same as form name

function mapDispatchToProps(dispatch) {
    return {fetchDataSec3: bindActionCreators(fetchI9Section2, dispatch),
            loadDataSec3:  bindActionCreators(loadI9Section2, dispatch),
            saveDataSec3:  bindActionCreators(saveI9Section2, dispatch)};
}

function mapStateToProps(state) {
    //console.log(state.form);
    const listAOrBCDocType = selector(state, 'i9.section2.section2Doc.docType')
    const docTitle = selector(state, 'i9.section2.section2Doc.listADocs.0.docTitle')
    return {
        listAOrBCDocType,
        docTitle,
        formValuesSec2: state.form
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Section3Content);





