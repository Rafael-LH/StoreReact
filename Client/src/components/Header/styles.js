import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Alert = styled.div`
  color: #33b13a;
  font-size: 14px;
  margin-left: 5px;
`
export const Checkout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  /* width: 30px; */
`
export const Link = styled(LinkRouter)`
  color: #33b1ff;
`