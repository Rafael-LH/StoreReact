import React, { useContext } from 'react'
import { PaymentContainer, PaymentItem, PaymentArticle } from './styles'
import { Context } from '@context/Context'
import { sumTotal } from '@helpers/sumTotal'
import { PayPalButton } from 'react-paypal-button'
import { paypalOptions, buttonStyles } from '@config/paypal'

const Payment = () => {
  const { data: { cart, buyer }, addNewOrder } = useContext(Context)

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
    }
  }
  return (
    <PaymentContainer>
      <PaymentItem>
        <h3>Resumen del pedido</h3>
        {
          cart.map(item => (
            <PaymentItem>
              <PaymentArticle>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </PaymentArticle>
            </PaymentItem>
          ))
        }
        <button type='button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={sumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(`Ha ocurrido algun error ${error}`)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </button>
      </PaymentItem>
    </PaymentContainer>
  )
}
export default Payment