import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  .Header-checkout {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    width: 30px;
    margin: 0 0 0 0.5em;
  }
  .Header-alert {
    color: #33b13a;
    font-size: 14px;
    margin-left: 5px;
  }
  .Header a {
    color: #33b1ff;
  }
`