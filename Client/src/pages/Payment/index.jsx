import React from 'react'
import { PaymentContainer, PaymentItem } from './styles'

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentItem>
        <h3>Resumen del pedido</h3>
        <button type='button'>Boton de pago con Paypal</button>
      </PaymentItem>
    </PaymentContainer>
  )
}
export default Payment