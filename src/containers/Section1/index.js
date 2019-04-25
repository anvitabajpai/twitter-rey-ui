import React from 'react';
import showResults from '../../utils/showResults';
import Section1Content from '../../pageContent/Section1Content';
import { Values } from 'redux-form-website-template';

// Container component
class Section1 extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>Form I-9 Section 1</h2>
            <Section1Content onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="Section1Content" />
        </div>;
    }
}

export default Section1;

