import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
const styles = {
    root: {
        background: '#000000',
        borderRadius: 3,
        border: 0,
        color: 'white',
        width: 250,
        height: 35,
        padding: '0 30px',
        "&:hover": {
            background: 'grey',
            filter: 'brightness(80%)'
        }
    },
   text: {
        textTransform: 'capitalize',
    },
};

function CustomButtonLogin(props) {
    const { classes } = props;

    return (
        <Button
            classes={{
                root: classes.root,
                text: classes.text,
            }}
        >
            {props.text}
        </Button>
    );
}

CustomButtonLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButtonLogin);
