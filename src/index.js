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
var userName = '';
Auth.currentAuthenticatedUser()
    .then(
        (user) => {
            if (user.name != undefined) {
                userName = user.name;
                console.log(userName);
            } else if (user != undefined && user.attributes != undefined && user.attributes.email != undefined) {
                userName = user.attributes.email;
                console.log(user.attributes.email);
            }
            console.log(user);
        }
     ).catch(
        err => console.log(err)
     )


console.log(Auth.federatedSignIn.name);


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.authState == "signedIn") {
            return (
                <Provider store={store}>
                    <div>
                        <Greetings
                            inGreeting={(username) => 'Hi ' + userName}
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

