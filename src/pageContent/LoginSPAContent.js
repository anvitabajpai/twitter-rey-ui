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
import GoogleButton from '../components/core/ButtonGoogle';
import FacebookButton from '../components/core/ButtonFacebook';
import SvgIcon from '@material-ui/core/SvgIcon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: '#4267b2' },
        secondary: { main: '#db3236' },
    },
});

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

function FacebookIcon(props) {
    return (
        <SvgIcon {...props}
                 viewBox="0 0 35 24">
            <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
        </SvgIcon>
    );
}

function GoogleIcon(props) {
    return (
   <SvgIcon {...props}
            viewBox="0 0 80 50">
       <path  d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "/>
       <path  d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z "/>
       <path  d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z "/>
       <path  d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z "/>
   </SvgIcon>
    );
}

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
                    <MuiThemeProvider theme={theme}>
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
                            <GoogleButton  color="#db3236" text="Connect with Google">
                                <GoogleIcon className={styles.rightIcon} />
                            </GoogleButton>
                            <br/>
                            <br/>
                            <FacebookButton  color="#4267b2" text="Connect with Facebook">
                                <FacebookIcon className={styles.rightIcon} />
                            </FacebookButton>
                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1}>
                        </Grid>
                    </Grid>
                    </MuiThemeProvider>
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



