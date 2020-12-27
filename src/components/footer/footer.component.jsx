import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from './footer.styles';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.appbar}>
            <Container maxWidth='md'>
                    <Typography className={classes.icons} variant='body1'>
                        <SocialIcon className={classes.icon} network='facebook' bgColor='white' url='https://www.facebook.com/Teton-Valley-Meats-116548596927746' /> 
                        <SocialIcon className={classes.icon} network='instagram' bgColor='white' url='https://www.instagram.com/tetonvalleymeats/' />
                    </Typography>    
            </Container>
        </AppBar>
    )
}

export default Footer;
