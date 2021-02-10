import React, { useContext } from 'react'
import { SuccessContainer, Map } from './styles'
import { Context } from '@context/Context'
const Success = () => {
  const { data: { orders } } = useContext(Context)
  return (
    <SuccessContainer>
      <h2>{orders[0] && `${orders[0].buyer[0].fullname},`} Gracias por tu compra</h2>
      <span>Tu pedido llegara en 3 días a tu dirección</span>
      <Map>
        Google Maps
      </Map>
    </SuccessContainer>
  )
}
export default Success