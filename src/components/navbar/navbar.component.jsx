import React from 'react';
import { AppBar, 
    Toolbar, 
    IconButton, 
    Badge, 
    MenuItem, 
    Menu, 
    Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/TVMtransparent.png';  
import makeStyles from './navbar.styles'; 


const Navbar = ({ totalItems }) => {
    const classes = makeStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={Logo} alt='Teton Valley Meats' height='25px' className={classes.image} />
                        Teton Valley Meats
                    </Typography>
                    <div className={classes.grow} /> 
                    { location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary' >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>  )}
                </Toolbar>
            </AppBar>    
        </>
    )
}

export default Navbar;
