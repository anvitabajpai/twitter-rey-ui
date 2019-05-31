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
        width: 60,
        height: 35,
        "&:hover": {
            background: 'grey',
            filter: 'brightness(80%)'
        },
        float: 'right'
    },
   text: {
        textTransform: 'capitalize',
    },
};

function CustomButton(props) {
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

CustomButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButton);
