import React, { useContext } from 'react'
import { HeaderContainer, Checkout, Link, Alert } from './styles'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
import { Context } from '@context/Context'
const Header = () => {
  const { data: { cart } } = useContext(Context)

  return (
    <HeaderContainer>
      <Link to='/'>
        <FaHome size="2em" />
      </Link>
      <Checkout>
        <Link to='/checkout'>
          <FaShoppingCart size="1.5em" />
        </Link>
        {cart.length > 0 && <Alert>{cart.length}</Alert>}
      </Checkout>
    </HeaderContainer>
  )
}
export default Header