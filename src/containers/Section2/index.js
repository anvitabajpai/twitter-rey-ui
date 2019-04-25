import React from 'react';
import showResults from '../../utils/showResults';
import Section2Content from '../../pageContent/Section2Content';
import { Values } from 'redux-form-website-template';

// Container component
class Section2 extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>Form I-9 Section 2</h2>
            <Section2Content onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="Section2Content" />
        </div>;
    }
}

export default Section2;
