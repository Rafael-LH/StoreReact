import React from 'react'
import { Link } from 'react-router-dom'
import { InformationContainer, Form, InformationButtons, InformationItem, InformationElement } from './styles'

const Information = () => {
  return (
    <InformationContainer>
      <div>
        <h2>Informacion de Contacto</h2>
        <Form>
          <input type="text" placeholder="Nombre Completo" name="fullname" />
          <input type="text" placeholder="Correo Electronico" name="email" />
          <input type="text" placeholder="Direction" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Codigo Postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
        </Form>
        <InformationButtons>
          <div>Regresar</div>
          <Link to='/checkout/payment'>
            <div>Pagar</div>
          </Link>
        </InformationButtons>
      </div>
      <div>
        <h3>Pedido: </h3>
        <InformationItem>
          <InformationElement>
            <h4>Item Name</h4>
            <span>$10</span>
          </InformationElement>
        </InformationItem>
      </div>
    </InformationContainer>
  )
}
export default Information