import React, { Component } from "react";
import { Field } from 'redux-form';
import renderTextField from '../../core/Textfield';
import renderReactSelect from '../../composite/core/ReactSelect';
import renderTextFieldCheckBoxCombination from '../section1Rendered/TextFieldCheckBox';
import MapUtil from '../../../utils/mapUtil';
import '../../../css/index.css'

var mapUtil = new MapUtil();
class renderAddressFieldCombination  extends Component {

      constructor(props) {
          super(props);
          this.state = {address: '',
          city: '',
          state: '',
          country: '',
          zip: '',
          unit: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onChange = this.onChange.bind(this);
        }

        handleChange(event){
            this.setState({ [event.target.name]: event.target.value });
        }

        onChange = (type) => (event, index, value) => {
          this.setState({
            [type]: value
          })
        }

    render() {

        return (
            <div>
                <div>
                    <div className="outerDiv nonBreakingSpace">
                        <Field name={ this.props.addressNameTag }
                               onChange = { this.handleChange }
                               component={renderTextField}
                               label="Address *"/>
                    </div>

                    <div className="outerDiv">
                        <Field name="unit"
                               nameTag = { this.props.unitNameTag }
                               nameTagNA = { this.props.unitNameTagNA }
                               initialData = { this.props.unitInitialData }
                               initialDataNA = { this.props.unitInitialDataNA }
                               component={renderTextFieldCheckBoxCombination}
                               label="Apt. Number *"
                               checkboxlabel="No Apt. Number"/>
                    </div>
               </div>

                <div>
                    <div className="outerDiv nonBreakingSpace">
                        <Field name={ this.props.cityNameTag }
                               onChange = { this.handleChange }
                               component={renderTextField}
                               label="City *"/>
                    </div>

                    <div className="outerDiv break nonBreakingSpace">
                        <Field name={ this.props.countryNameTag }
                               component={renderReactSelect}
                               onChange={this.onChange("country")}
                               initialData = { this.props.stateInitialData }
                               width={260}
                               label="Country *"
                               suggestions={mapUtil.countries}>
                        </Field>
                    </div>

                    <div className="outerDiv doubleBreak nonBreakingSpace">
                        <Field name={ this.props.stateNameTag }
                               component={renderReactSelect}
                               onChange={this.onChange("state")}
                               initialData = { this.props.countryInitialData }
                               width={260}
                               label="State *"
                               suggestions={mapUtil.states}>
                        </Field>
                    </div>

                    <div className="outerDiv">
                        <Field name={ this.props.zipNameTag }
                               onChange = { this.handleChange }
                               component={renderTextField}
                               label="Zip *"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default renderAddressFieldCombination