import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

function PayPalButton(props) {
  const env = 'sandbox';
  const currency = 'USD';

  function onSuccess(payment) {
    console.log('The payment was succeeded!', payment);
    props.removeItem('all');
  }

  function onCancel(data) {
    console.log('The payment was cancelled!', data);
  }

  function onError(err) {
    console.log('Error!', err);
  }

  const client = {
    sandbox: process.env.REACT_APP_APP_ID,
    production: 'YOUR-PRODUCTION-APP-ID',
  };

  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={props.total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
}

export default PayPalButton;
