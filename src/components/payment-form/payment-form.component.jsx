import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReviewCheckout from '../review-checkout/review-checkout.component';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if(error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
         },
         shipping: {
           name: 'Primary',
           street: shippingData.address1,
           town_city: shippingData.city,
           county_state: shippingData.shippingSubdivision,
           postal_zip_code: shippingData.zipcode,
           country: shippingData.shippingCountry,
         },
         payment: {
           gateway: 'stripe',
           stripe: {
             payment_method_id: paymentMethod.id,
           },
         },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();

    }

  };

    return (
        <>
          <ReviewCheckout checkoutToken={ checkoutToken } />
          <Divider />
          <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                  <CardElement />
                  <br /> <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outline' onClick={backStep}>Back</Button>
                    <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                      Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Button>
                  </div>
                </form>
              )}
            </ElementsConsumer>
          </Elements>
        </>
    );
};

export default PaymentForm;