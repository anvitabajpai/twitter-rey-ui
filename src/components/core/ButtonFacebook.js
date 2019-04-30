import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
function FacebookIcon(props) {
    return (
        <SvgIcon {...props}
                 viewBox="0 0 35 24">
            <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
        </SvgIcon>
    );
}

const styles = {
    root: {
        background: '#4267b2',
        borderRadius: 3,
        border: 0,
        color: 'white',
        width: 250,
        height: 35,
        padding: '0 30px',
    },
   text: {
        textTransform: 'capitalize',
    },
};

function CustomButtonFacebook(props) {
    const { classes } = props;

    return (
        <Button
            classes={{
                root: classes.root,
                text: classes.text,
            }}
        >
            <FacebookIcon className={styles.rightIcon} />
            {props.text}
        </Button>
    );
}

CustomButtonFacebook.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButtonFacebook);
