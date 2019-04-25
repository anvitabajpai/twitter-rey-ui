import React from 'react';
//import showResults from '../../utils/showResults';
import SearchSPAContent from '../../pageContent/SearchSPAContent';
import { Values } from 'redux-form-website-template';

// Container component
class SearchSPA extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <SearchSPAContent /*onSubmit={showResults}*/ />
        </div>;
    }
}

export default SearchSPA;
