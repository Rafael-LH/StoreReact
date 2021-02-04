import React from 'react'
import { SuccessContainer, Map } from './styles'

const Success = () => {
  return (
    <SuccessContainer>
      <h2>Gracias por tu compra</h2>
      <span>Tu pedido llegara en 3 dias a tu direccion</span>
      <Map>
        Google Maps
      </Map>
    </SuccessContainer>
  )
}
export default Success