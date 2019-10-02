import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout'; 

// Stripe Component - this component handles our payment UI and functionality.  
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0XqJtjADRclF3ytQjK5Md4vR00wlzsKYLs'; 

    const onToken = token => {
        console.log(token); 
        alert('Payment Successful'); 
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}; 

export default StripeCheckoutButton; 