import React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import useStyles from './about-us.styles';

const AboutUs = () => {
    const classes = useStyles();
    return (
        <>
         <Container className={classes.container}>
             <Paper className={classes.paper} elevation={4}>
                 <Typography variant='h2' className={classes.title}>Who We Are</Typography>
                 <br />
                 <Typography variant='h5' className={classes.body}>
                 Impeccably Sourced. Intensely Flavored. Pure. Animal Welfare Approved. 
                 No Hormones. No Antibiotics. No BS. Craft. Handmade. The Real Deal. 
                 Delicious. First. Foremost. Always.<br />Teton Valley Meats Is Authenticity.
                 </Typography>
             </Paper>
         </Container>   
        </>
    )
}

export default AboutUs;
