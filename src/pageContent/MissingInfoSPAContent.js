import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/index.css'
import axios from "axios";
import { connect } from 'react-redux';
import renderTextField from '../components/core/Textfield';
import { Values } from 'redux-form-website-template';
import renderDatePicker from "../components/core/DatePicker";
import Divider from 'material-ui/Divider'

class MissingInfoSPAContent extends Component {
    constructor(props) {
        super(props);
        this.submitOrder = this.submitOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            birthDate: '',
            hireDate: '',
            submitted: false,
            searchCompleted: false,
            searchData: [],
            searchESCompleted: false,
            searchESData: [],
            missingData: []
        };
    }

    handleChange = (type) => (event, index, value) => {
        this.setState({
            [type]: event.target.value
        })
    }

    submitOrder(){
        var values = this.props.formValues.MissingInfoSPAContent.values;
        values["id"] = this.props.id;
        axios.post("https://6x7psck0w8.execute-api.us-east-1.amazonaws.com/missing_information_api/candidate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            },
            data: values
        }).then(res => {
            this.setState({ missingData: res.missingData});
            console.log('missingData: '+this.state.missingData);
            this.setState({ submitted: true});
        }).catch(function(error) {
            if(error.data) {
                console.log(error.data);
            }
        });

    }

    componentDidMount() {
        var id = this.props.id;
        axios.get("https://6x7psck0w8.execute-api.us-east-1.amazonaws.com/missing_information_api/candidate", {
            params: {
                id:id
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.setState({ missingData: res.data.missingData});
            console.log('missingData: '+ this.state.missingData);
        }).catch(function(error) {
            if(error.data) {
                console.log(error.data);
            }
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className="hide-submit">

                <div>
                    <img src="STS_Logo.png" alt="STS" />
                </div>

                <Divider className="break"/>
                <div className="break" />

                <h2>Collect Missing Info</h2>


                <div className="break" />

                <div>
                    {this.createTable()}
                </div>

                {this.state.submitted === true &&
                    <div className="break negativeMarginTop">
                        You submitted: <br/><br/>
                        <Values form="MissingInfoSPAContent" />
                    </div>
                }

                <div className="doubleBreak" />
                <div className="doubleBreak"/>
                <div className="doubleBreak" />
                <div className="doubleBreak"/>
                <div className="doubleBreak" />
                <div className="doubleBreak"/>
                <div className="doubleBreak" />
                <div className="doubleBreak"/>



                <div>
                    <button className="button left"  onClick={this.submitOrder} >Submit</button>
                </div>
            </form>
        );
    }

    createTable = () => {
        if(this.state.missingData === undefined) {return;}
        let div = [];
        // Outer loop to create parent
        for (let i = 0; i < this.state.missingData.length; i++) {
            //Create the parent and add the children
            div.push(
                <div key={this.state.missingData[i]} >
                    {this.state.missingData[i] !== 'Date Of Birth' && this.state.missingData[i] !== 'SSN Receipt Date' &&
                    <div className="break">
                        <Field name={this.state.missingData[i]}
                               component={renderTextField}
                               width={300}
                               label={this.state.missingData[i]}/>
                    </div>
                    }
                    {this.state.missingData[i] === 'Date Of Birth'  && <div className="break">
                            <Field name={this.state.missingData[i]}
                                   onChange={this.handleChange("birthDate")}
                                   val={this.state.birthDate}
                                   component={renderDatePicker}
                                   width={300}
                                   label="Date Of Birth (MM/DD/YYYY)"/>
                    </div>
                    }
                    {this.state.missingData[i] === 'SSN Receipt Date' && <div className="break">
                        <Field name={this.state.missingData[i]}
                               onChange={this.handleChange("hireDate")}
                               val={this.state.hireDate}
                               component={renderDatePicker}
                               width={300}
                               label="SSN Receipt Date (MM/DD/YYYY)"/>
                    </div>
                    }
                </div>
           )
        }
        return div
    }



}

MissingInfoSPAContent = reduxForm({
    form: 'MissingInfoSPAContent', // a unique identifier for this form
})(MissingInfoSPAContent);

function mapStateToProps(state) {
    return {
        formValues: state.form
    };
}

export default connect(mapStateToProps)(MissingInfoSPAContent);



