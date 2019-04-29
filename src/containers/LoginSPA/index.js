import React from 'react';
//import showResults from '../../utils/showResults';
import LoginSPAContent from '../../pageContent/LoginSPAContent';
import { Values } from 'redux-form-website-template';

// Container component
class LoginSPA extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <LoginSPAContent /*onSubmit={showResults}*/ />
        </div>;
    }
}

export default LoginSPA;
