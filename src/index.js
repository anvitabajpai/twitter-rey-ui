import React from "react";
import ReactDOM from 'react-dom';
import Amplify, {Auth} from "aws-amplify";
import { Provider } from 'react-redux';
const rootEl = document.getElementById('app');
import Routes from './Routes';
import {store} from './containers/SearchSPA/store';
import awsMobile from './aws-exports';
import { withAuthenticator,  Authenticator, Greetings,  SignIn, SignUp, ConfirmSignIn, VerifyContact, ConfirmSignUp, ForgotPassword, RequireNewPassword, Loading } from "aws-amplify-react";

Amplify.configure(awsMobile);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : ''
        };
    }

    componentWillMount() {
        try {
            /************ Setting customized userName for Greeting on sign in via federatedSignIn/cognitoUserPoolSignIn ************/

            let loggedIn = false
            if (Auth.user) {

                console.log("Authenticated user object exists");

                if (Auth.user.name != undefined) {

                    /********* Federated Sign In ********/
                    console.log("Via Federated SignIn");
                    this.setState({userName: Auth.user.name});

                } else {

                    /********* Cognito User Pool Sign In ********/
                    console.log("Via Cognito User Pool SignIn");
                    const {user: {signInUserSession: {accessToken: {payload: {exp, iat}}}}} = Auth;
                    if (iat < exp) {
                        loggedIn = true;
                    }
                    console.log("is logged in", loggedIn);
                    if (loggedIn) {
                        if (Auth.user.attributes != undefined) {
                            this.setState({userName: Auth.user.attributes.email});
                        }
                    }
                }
            }

        }catch(error){
            console.error(error);
        }
    }


    render() {
        if (this.props.authState == "signedIn") {
            return (
                <Provider store={store}>
                    <div>
                         <Greetings
                                inGreeting={(username) => 'Hi ' + this.state.userName}
                          />
                         <Routes />
                    </div>
                </Provider>
            );
        } else {
            return null;
        }
    }
}


const federated = {
    google_client_id: '157100821509-0njnajfki2nl6noptpf06kd2apsr91kp.apps.googleusercontent.com', // Enter your google_client_id here
    facebook_app_id: '496308751108161', // Enter your facebook_app_id here
    amazon_client_id: '' // Enter your amazon_client_id here
};


const AppWithAuth = withAuthenticator(
    App,
    false,
);

ReactDOM.render(
    <AppWithAuth federated={federated} />,
    rootEl,
);

