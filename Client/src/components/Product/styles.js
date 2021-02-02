import styled from 'styled-components'

export const Item = styled.div`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39,44,49,0.06), 1px 3px 8px rgba(39,44,49,0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  position: relative;
`
export const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0 0;
  object-fit: contain;
`
export const Info = styled.div`
  padding: 10px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    span {
      color: #33b13a;
      }
    }
  p {
    font-size: 14px;
    font-weight: 300;
  }
`
export const Button = styled.button`
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  width: 100%;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  border: 0px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    background-color: rgba(39,44,49,0.06);
  }
`