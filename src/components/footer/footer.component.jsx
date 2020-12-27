import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from './footer.styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.appbar}>
            <Container maxWidth='md'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='body1' color='inherit'>
                        &copy; 2020 Vmaxtacular
                    </Typography>  
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer;
