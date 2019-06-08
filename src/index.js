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

const AppWithAuth = withAuthenticator(App);

ReactDOM.render(
    <AppWithAuth/>,
    rootEl,
);

