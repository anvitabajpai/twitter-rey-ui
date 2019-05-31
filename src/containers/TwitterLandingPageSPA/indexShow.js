import React from 'react';
import showResults from '../../utils/showResults';
import SearchSPAContentES from '../../pageContent/SearchSPAContentES';
import { Values } from 'redux-form-website-template';

// Container component
class SearchSPAES extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <SearchSPAContentES orderId={this.props.match.params.searchKeyWord} onSubmit={showResults} />
        </div>;
    }
}

export default SearchSPAES;
