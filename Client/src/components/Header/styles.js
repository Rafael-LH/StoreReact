import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px;
  max-width: 1090px;
  margin: auto;
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
`
export const Link = styled(LinkRouter)`
  color: #33b1ff;
`