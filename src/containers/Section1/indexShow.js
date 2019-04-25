import React from 'react';
import showResults from '../../utils/showResults';
import Section1ContentRendered from '../../pageContent/Section1ContentRendered';
import { Values } from 'redux-form-website-template';

// Container component
class RenderedSection1 extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>Form I-9 Section 1</h2>
            <Section1ContentRendered orderId={this.props.match.params.orderId} onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="Section1ContentRendered" />
        </div>;
    }
}

export default RenderedSection1;
