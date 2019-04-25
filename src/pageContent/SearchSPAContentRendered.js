import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { load as loadSearchSPA, fetch as fetchSearchSPA } from '../containers/SearchSPA/actions';
import '../css/index.css'
import renderSearchBar from "../components/core/SearchBar";
import axios from "axios";
import * as $C from "../containers/SearchSPA/constants";

class SearchSPAContentRendered extends Component {
    constructor(props) {
         super(props);
            this.submitOrder = this.submitOrder.bind(this);
            this.state = {
                searchCompleted: false,
                searchData: ''
            };
    }

    submitOrder()
    {
            var values = this.props.formValues.SearchSPAContentRendered.values;
            /*var  val =  {
                "query": {
                    "match_all": {}
                }
            };*/
            /* var val =  {
                 "query":{
                     "query_string":{
                         "query":"Anvita"
                     }
                 }
             };
             return axios({
                 method: 'post',
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 },
                 //url: $C.ABSCORE_ACCOUNTDB_ENDPOINT,
                 url: 'https://vpc-api-services-dev-yvh5yktrwrn3q3vxazcduqalwu.us-east-1.es.amazonaws.com/poc-turing/sdorders/_search',
                 data: val
             });*/
            /*return axios({
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: $C.ABSCORE_ACCOUNTDB_ENDPOINT+values.searchBar,
                //url: 'https://vpc-api-services-dev-yvh5yktrwrn3q3vxazcduqalwu.us-east-1.es.amazonaws.com/poc-turing/sdorders/_search',
                //data: "kay"
            });*/

            axios.get($C.ABSCORE_ACCOUNTDB_ENDPOINT + values.searchBar, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                this.setState({searchCompleted: true});
                this.setState({searchData: response.data});
            }).catch(function (error) {
                if (error.data) {
                    console.log(error.data);
                }
            });
    }

    componentDidMount() {
        this.props.fetchSearchSPAData(this.props.searchKeyWord);
    }

   /* componentWillReceiveProps( newProps ) {
        var values = newProps.formValues.Section1ContentRendered.values;
        values.formI9.section1.dob =  this.format(values.formI9.section1.dob);
        values.formI9.section1.expirationDate =  this.format(values.formI9.section1.expirationDate);
        this.setState( { birthDate: values.formI9.section1.dob});
    }*/

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit} className="hide-submit">
                <div style={{textAlign: 'center'}}>
                    <Field name="searchBar"
                           component={renderSearchBar}
                           label="SearchBar *"/>
                    <label>
                        <input type="submit" onClick={this.submitOrder}/>
                        <svg color="action"
                             fontSize="large" id="search-icon" className="search-icon" viewBox="0 0 24 24">
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path fill="none" d="M0 0h24v24H0z"/>
                        </svg>
                    </label>
                </div>

                <div>
                    { this.state.searchData}
                </div>
            </form>
        );
    }
}

SearchSPAContentRendered = reduxForm({
    form: 'SearchSPAContentRendered', // a unique identifier for this form
})(SearchSPAContentRendered);

//  Decorated with connect to read form values (in this particular context, this is being used in the form above for the purpose of conditional rendering of fields)
const selector = formValueSelector('SearchSPAContentRendered') // <-- same as form name

function mapDispatchToProps(dispatch) {
    return {fetchSearchSPAData: bindActionCreators(fetchSearchSPA, dispatch),
            loadSearchSPAData:  bindActionCreators(loadSearchSPA, dispatch)};
            //saveData:  bindActionCreators(saveI9Section1, dispatch)};
}

/*function mapStateToProps(state) {
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
}*/

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSPAContentRendered);





