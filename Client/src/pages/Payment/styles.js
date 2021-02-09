import styled from 'styled-components'

export const PaymentContainer = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  /* .Payment-back {
    margin: 10px 0 0 0;
  } */
`
export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`
export const PaymentArticle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  h4{
    margin: 0px;
  }
`
  // .Payment-item .fas {
  // margin: 0 0 0 10px;
  // color: rgba(0,0,0,0.4);
  // cursor: pointer;
  // }