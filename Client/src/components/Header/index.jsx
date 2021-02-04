import React from 'react'
import { HeaderContainer, Checkout, Link } from './styles'
import { FaHome } from 'react-icons/fa'

const Header = () => (
  <HeaderContainer>
    <Link to='/'>
      <FaHome size="2em" />
    </Link>
    <Checkout>
      <Link to='/checkout'>Checkout</Link>
    </Checkout>
  </HeaderContainer>
)
export default Header