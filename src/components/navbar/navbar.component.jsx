import React from 'react';
import { AppBar, 
    Toolbar, 
    IconButton, 
    Badge, 
    MenuItem, 
    Menu, 
    Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../assets/TVMtransparent.png';  
import makeStyles from './navbar.styles'; 


const Navbar = ({ totalItems }) => {
    const classes = makeStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt='Teton Valley Meats' height='25px' className={classes.image} />
                        Teton Valley Meats
                    </Typography>
                    <div className={classes.grow} /> 
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary' >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>    
        </>
    )
}

export default Navbar;
