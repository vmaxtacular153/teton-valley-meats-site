import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Logo from '../../assets/TVMtransparent.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/tetons.jpg"})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'transform(-40%, -80%)',
    },
    overlayText: {
        paddingTop: '12rem',
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: '0.2rem',
    },
    logo: {
        maxWidth: '200px',
        paddingTop: '25px',
        paddingLeft: '10px',
    },
    subtitle: {
        marginTop: '1rem',
        paddingBottom: '6rem',
        fontWeight: '700',
        letterSpacing: '0.2rem',
    },
}));

const HeaderImage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
            <img src={Logo} alt='Teton Valley Meats' className={classes.logo} />
            </div>
            <div className={classes.overlayText}>
                <Typography variant='h1' className={classes.title}>Teton Valley Meats</Typography>
                <Typography variant='h5' className={classes.subtitle}>Craft butcher shop in the heart of the Teton Valley</Typography>
            </div>
        </div>
    )
}

export default HeaderImage;