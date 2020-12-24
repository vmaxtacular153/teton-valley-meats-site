import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { Container, 
    Typography, 
    Button, 
    Grid} from '@material-ui/core';
import useStyles from './cart.styles';

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>Your cart is empty, start shopping!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton}
                            size='large'
                            type='button'
                            variant='contained'
                            color='secondary'
                        >
                            Empty Cart
                        </Button>
                        <Button className={classes.checkoutButton}
                            size='large'
                            type='button'
                            variant='contained'
                            color='primary'
                        >
                            Check Out
                        </Button>
                    </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title}
                variant='h3'
                gutterBottom
            >
            Your Shopping Cart
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart;
