import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        flexBasis: 210,
    }
}));

const InputAdornments = (props) =>{
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <div className={classes.root}>
            <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="adornment-password">{props.label}</InputLabel>
                <Input
                    id="adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                                {values.showPassword ? <Visibility color="action" /> : <VisibilityOff color="action"/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}

export default InputAdornments;