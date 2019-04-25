import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class RadioButtonsGroup extends React.Component {
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
    return (
      <div >
        <MuiThemeProvider theme={theme}>
       <RadioGroup
                {...input}
                style={{ border: touched && error ? "1.5px solid red" : "none" }}
                value= {input.value}
           >

        <FormControlLabel  value="A"  control={<Radio color={"primary"}  style={{marginLeft : 5}}/>} label="List A" />

        <FormHelperText className="negativeMarginTopCustom marginLeft"><i>U.S. Passport</i></FormHelperText>
        <FormHelperText className="marginLeft"><i>Permanent Resident Card (I-551)</i></FormHelperText>
        <FormHelperText className="marginLeft"><i>Employment Authorization Card (I-766)</i></FormHelperText>
        <FormHelperText className="marginLeft doubleBreak"><i>and other documents...</i></FormHelperText>


        <FormControlLabel value="BC" className="negativeMarginTop" control={<Radio color={"primary"} style={{marginLeft : 5}}/>} label="List B and C" />

        <FormHelperText className="negativeMarginTopCustom marginLeft"><i>Driver's License or ID Card</i></FormHelperText>
        <FormHelperText className="marginLeft"><i>Voter's Registration Card</i></FormHelperText>
        <FormHelperText className="marginLeft break"><i>U.S. Military Card or Draft Card</i></FormHelperText>

        <FormHelperText className="marginLeft"><i>Social Security Card</i></FormHelperText>
        <FormHelperText className="marginLeft"><i>Birth Certificate</i></FormHelperText>
        <FormHelperText className="marginLeft doubleBreak"><i>and other documents...</i></FormHelperText>

       </RadioGroup>
         <br/>
         <span className='error-text' style={{ display: touched && error ? "inline" : "none" }}>{error}</span>
        </MuiThemeProvider>

      </div>
    );
  }
}


export default RadioButtonsGroup;
