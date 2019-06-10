import React from "react";
import ReactDOM from 'react-dom';
import Amplify from "aws-amplify";
import { Provider } from 'react-redux';
const rootEl = document.getElementById('app');
import Routes from './Routes';
import {store} from './containers/SearchSPA/store';
import { withAuthenticator } from "aws-amplify-react";
import awsMobile from './aws-exports';

Amplify.configure(awsMobile);

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                   <div>
                      <Routes />
                   </div>
            </Provider>
        );
    }
}

const federated = {
    google_client_id: '157100821509-0njnajfki2nl6noptpf06kd2apsr91kp.apps.googleusercontent.com', // Enter your google_client_id here
    facebook_app_id: '496308751108161', // Enter your facebook_app_id here
    amazon_client_id: '' // Enter your amazon_client_id here
};

const AppWithAuth = withAuthenticator(App, {includeGreetings: true});

ReactDOM.render(
    <AppWithAuth federated={federated}/>,
    rootEl,
);

