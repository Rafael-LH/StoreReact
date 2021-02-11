import React, { useContext } from 'react'
import { Context } from '@context/Context'
import { sumTotal } from '@helpers/sumTotal'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { CheckoutElement, Element, ItemContent, Item, SideBar } from './styles'
const Checkout = () => {
  const { data: { cart }, removeFromCart } = useContext(Context)

  const handleRemove = product => () => {
    removeFromCart(product)
  }
  const handleSumTotal = () => {
    return sumTotal(cart)
  }
  return (
    <CheckoutElement>
      <ItemContent>
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
        {
          cart.map((item, index) => (
            <Item key={index}>
              <Element>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </Element>
              <button type="button" onClick={handleRemove(item)}>
                <FaTrashAlt />
              </button>
            </Item>
          ))
        }
      </ItemContent>
      {cart.length > 0 &&
        <SideBar>
          <h3>Precio total: $ {handleSumTotal()}</h3>
          <Link to='/checkout/information'>
            <button>Continuar Pedido</button>
          </Link>
        </SideBar>
      }
    </CheckoutElement>
  )
}
export default Checkout