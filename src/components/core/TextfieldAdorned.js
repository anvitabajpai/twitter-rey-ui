import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        flexBasis: 200,
        width:240
    },
    icon:{
        paddingRight : 10,
    }
});

const renderAdornedTextField = (
    { classes, input, label, meta: { touched, error }, width, icon},
) => (
    <div className={styles.root}>
    <TextField
        id="input-with-icon-textfield"
        label={label}
        className={classes.textField}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end" className={classes.icon}>
                    {icon}
                </InputAdornment>
            ),
        }}
    />
    </div>
);

export default withStyles(styles)(renderAdornedTextField);
