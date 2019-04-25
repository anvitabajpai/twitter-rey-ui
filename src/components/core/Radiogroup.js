import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../css/index.css';

class renderRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const theme = createMuiTheme({
            palette: {
                primary: { main: '#00bcd4' }
            },
        });
        const { input, meta:{touched, error} } = this.props;
        var counter = 0;
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <RadioGroup
                        {...input}
                        style={{ border: touched && error ? "1.5px solid red" : "none"}}
                        className = {touched && error ? "paddingBottomRadio" : ""}
                        value= {input.value}
                    >
                        {(this.props.optionVals).map(option => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio color={"primary"}/>}
                                className={"negativeMarginsRadio"}
                                label={option.label}/>
                        ), counter)}
                    </RadioGroup>
                    <br/>
                    <span className='error-text' style={{ display: touched && error ? "inline" : "none" }}>{error}</span>
                </MuiThemeProvider>
            </div>
        );
    }
}


export default renderRadioGroup;