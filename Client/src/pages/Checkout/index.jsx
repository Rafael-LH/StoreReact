import React from 'react'
import { CheckoutElement, Element, Item, SideBar } from './styles'

const Checkout = () => {
  return (
    <CheckoutElement>
      <h3>Lista de Pedidos:</h3>
      <Item>
        <Element>
          <h4>Item Name</h4>
          <span>$10</span>
        </Element>
        <button type="button">Eliminar</button>
      </Item>
      <SideBar>
        <h3>Precio total: $10</h3>
        <button>Continuar Pedido</button>
      </SideBar>
    </CheckoutElement>
  )
}
export default Checkout