import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/index.css'
import axios from "axios";
import { connect } from 'react-redux';
import * as $C from "../containers/LoginSPA/constants";
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import Lock from '@material-ui/icons/Lock';
import renderAdornedTextField from '../components/core/TextfieldAdorned';
import { unstable_Box as Box } from '@material-ui/core/Box';
import InputAdornments from '../components/core/InputAdornments';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    divider: {
        width: '500',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 140,
        width: 100,
        borderColor:'text.primary'
    },
    button: {
        margin: theme.spacing.unit,
        width: 1000,
    },
    leftIcon: {
         marginRight: theme.spacing.unit,
    },
    rightIcon: {
         marginLeft: theme.spacing.unit,
    },
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
        // var values = this.props.formValues.SearchSPAContent.values;
        // axios.get($C.ABSCORE_ACCOUNTDB_ENDPOINT+values.searchBar, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => {
        //     this.setState({ searchCompleted: true});
        //     this.setState({ searchData: JSON.parse(res.data) });
        //     console.log('searchCompleted: '+ this.state.searchCompleted);
        //     console.log('searchData: '+this.state.searchData);
        //
        // }).catch(function(error) {
        //     if(error.data) {
        //         console.log(error.data);
        //     }
        // });
    }



    render() {
            const {handleSubmit} = this.props;
            return (
                <form onSubmit={handleSubmit} className="hide-submit">

                    <Grid><Divider /></Grid>
                    <Grid container
                          alignItems="center"
                          justify="center">
                        <Grid item sm={1} md={1} >
                        </Grid>
                        <Grid item xs={5} sm={5} md={3} lg={2}>
                            <br/><br/>
                            <Field name="username" component={renderAdornedTextField} icon={<AccountCircle color="action" />} label="Username *" />
                            <Field name="password" component={InputAdornments} label="Password *" />
                            <br/><br/>
                            <Button variant="contained">Login</Button>
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1}>
                        </Grid>
                        <Grid item xs={5} sm={5} md={3} lg={3}>
                            <Button variant="contained" color="secondary" fullWidth={true} className={styles.button}>
                                <DeleteIcon className={styles.rightIcon} />
                                Google
                            </Button>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" fullWidth={true} className={styles.button}>
                                <SendIcon className={styles.rightIcon} />
                                Facebook
                            </Button>
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1}>
                        </Grid>
                    </Grid>
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



