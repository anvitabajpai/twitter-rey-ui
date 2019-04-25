import React from 'react';
import showResults from '../../utils/showResults';
import Section3Content from '../../pageContent/Section3Content';
import { Values } from 'redux-form-website-template';

// Container component
class Section3 extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>Form I-9 Section 3</h2>
            <Section3Content onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="Section3Content" />
        </div>;
    }
}

export default Section3;
