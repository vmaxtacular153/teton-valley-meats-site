import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../product/product.component';
import useStyles from './products.styles';

const products = [
    {
        id: 1,
        name: 'Italian Sausage',
        description: 'Handmade classic Italian Sausage',
        price: '$5.99',
        image: 'https://picsum.photos/200',
    },
    {
        id: 2,
        name: 'Chorizo Sausage',
        description: 'Handmade classic Spanish Sausage',
        price: '$6.99',
        image: 'https://picsum.photos/200',
    }
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} /> 
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;