import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

const Footer = () => {
    return (
        <AppBar position='static' color='primary' style={{marginTop: '20px'}}>
            <Container maxWidth='md'>
                <Toolbar>
                    <Typography variant='body1' color='inherit'>
                        &copy; 2020 Vmaxtacular
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer;
