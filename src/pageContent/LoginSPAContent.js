import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/index.css'
import axios from "axios";
import { connect } from 'react-redux';
import * as $C from "../containers/LoginSPA/constants";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import renderAdornedTextField from '../components/core/TextfieldAdorned'
import InputAdornments from '../components/core/InputAdornments'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});

let id = 0;
function createData(arr) {
    id += 1;
    let orderId = arr[0];
    let lastName = arr[1];
    let firstName = arr[2];
    return {id, orderId, firstName, lastName };
}

class LoginSPAContent extends Component {
    constructor(props) {
        super(props);
        this.submitOrder = this.submitOrder.bind(this);
        this.state = {
            searchCompleted: false,
            searchData: [],
            searchESCompleted: false,
            searchESData: []
        };
    }
    submitOrder(){
        var values = this.props.formValues.SearchSPAContent.values;
        axios.get($C.ABSCORE_ACCOUNTDB_ENDPOINT+values.searchBar, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.setState({ searchCompleted: true});
            this.setState({ searchData: JSON.parse(res.data) });
            console.log('searchCompleted: '+ this.state.searchCompleted);
            console.log('searchData: '+this.state.searchData);

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
                        <Field name="username" component={renderAdornedTextField} icon={<AccountCircle color="action" />} label="Username *" />
                    </div>
                    <div>
                        <Field name="password" component={InputAdornments} label="Password *" />
                    </div>
                </form>
            );
    }
}

LoginSPAContent = reduxForm({
    form: 'LoginSPAContent', // a unique identifier for this form
})(LoginSPAContent);

function mapStateToProps(state) {
    return {
        formValues: state.form
    };
}

export default connect(mapStateToProps)(LoginSPAContent);



