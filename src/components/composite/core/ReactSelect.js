import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import '../../../css/index.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 50,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    }
});

class renderReactSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      isFocused: false}
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.initialData !== undefined) {
            this.setState({value: nextProps.initialData})
        }
        this.setState({value: nextProps.input.value})
    }

    render() {
        const { input, name, classes, meta:{touched, error},suggestions, label, width} = this.props;
        const { onChange, onBlur } = input;
        const  Control = (props) => {
            return (
                <TextField
                    fullWidth
                    label={label}
                    error = {(touched && error) ? true : false}
                    InputProps={{
                        inputComponent,
                        inputProps: {
                            className: props.selectProps.classes.input,
                            ref: props.innerRef,
                            children: props.children,
                            ...props.innerProps,
                        },
                    }}
                    InputLabelProps={{
                        shrink: (props.isFocused || (this.state.value !== undefined && this.state.value !== '')) ? true : false,
                        className: classes.textFieldFormLabel,
                    }}
                />
            );
        }

        function inputComponent({ inputRef, ...props }) {
            return <div style = {{width: width}}
                        ref={inputRef}
                        {...props}/>;
        }

        function Option(props) {
            return (
                <MenuItem
                    buttonRef={props.innerRef}
                    selected={props.isFocused}
                    component="div"
                    style={{
                        fontWeight: props.isSelected ? 500 : 400,
                    }}
                    {...props.innerProps}
                >
                    {props.children}
                </MenuItem>
            );
        }

        const components = {
            Option,
            Control
        };

        const handleChange = ({ value }) => {
            onChange(value);
        };
        const handleBlur = ({ value }) => {
            onBlur(value);
        };

        return (
            <div className={classes.root}>
                <FormControl margin='dense'
                             error = {((touched && error)) ? true : false}>
                   <Select
                        name = {name}
                        classes={classes}
                        options={suggestions}
                        components={components}
                        placeholder={this.state.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <FormHelperText style={{ display: ((touched && error)) ? "inline" : "none" }}>{(touched && error)}</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

renderReactSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(renderReactSelect);
