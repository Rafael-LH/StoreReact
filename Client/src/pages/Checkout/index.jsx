import React from 'react'
import { CheckoutElement, Element, ItemContent, Item, SideBar } from './styles'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

const Checkout = () => {
  return (
    <CheckoutElement>
      <ItemContent>
        <h3>Lista de Pedidos:</h3>
        <Item>
          <Element>
            <h4>Item Name</h4>
            <span>$10</span>
          </Element>
          <button type="button">
            <FaTrashAlt />
          </button>
        </Item>
      </ItemContent>
      <SideBar>
        <h3>Precio total: $10</h3>
        <Link to='/checkout/information'>
          <button>Continuar Pedido</button>
        </Link>
      </SideBar>
    </CheckoutElement>
  )
}
export default Checkout