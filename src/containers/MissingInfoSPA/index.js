import React from 'react';
import showResults from '../../utils/showResults';
import MissingInfoSPAContent from '../../pageContent/MissingInfoSPAContent';

// Container component
class MissingInfo extends React.Component {
    render() {
        return <div>
            <MissingInfoSPAContent id={this.props.match.params.id} onSubmit={showResults} />
        </div>;
    }
}

export default MissingInfo;
