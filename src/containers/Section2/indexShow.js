import React from 'react';
import showResults from '../../utils/showResults';
import Section2ContentRendered from '../../pageContent/Section1ContentRendered';
import { Values } from 'redux-form-website-template';

// Container component
class RenderedSection2 extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>Form I-9 Section 2</h2>
            <Section2ContentRendered orderId={this.props.match.params.orderId} onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="Section2ContentRendered" />
        </div>;
    }
}

export default RenderedSection2;
