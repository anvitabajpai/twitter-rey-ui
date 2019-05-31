import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import me from '../../../dist/me_new.jpg';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        marginLeft: 30,
        marginTop: -50,
        width:'140px',
        height: '140px',
        borderColor: 'white',
        backgroundPosition: 'top center'
    },
});

const AvatarIcon = (props) =>{
    const classes = useStyles();
    return (
        <Avatar src={me} className={classes.bigAvatar} />
    );
}

export default AvatarIcon;