import React from 'react';
import SearchBar from 'material-ui-search-bar'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const renderSearchBar = (
    { input, label, meta: { touched, error }, width},
) => (
    <FormControl error = { ((touched && error))? true : false}>
        <SearchBar
            {...input}
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style = {{width:'584px'}}

        />
        <FormHelperText style={{ display: (touched && error) ? "inline" : "none" }}>{error}</FormHelperText>
    </FormControl>
);

export default renderSearchBar;