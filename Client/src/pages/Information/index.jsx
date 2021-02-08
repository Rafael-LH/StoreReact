import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '@context/Context'
import useFormBuy from '@hooks/useFormBuy'
import { InformationContainer, Form, InformationButtons, InformationItem, InformationElement } from './styles'

const Information = () => {
  const { data: { cart }, addToBuyer } = useContext(Context)
  const { handleChange, handleSubmit } = useFormBuy(addToBuyer)

  return (
    <InformationContainer>
      <div>
        <h2>Informacion de Contacto</h2>
        <Form>
          <input type="text" placeholder="Nombre Completo" name="fullname" onChange={handleChange} />
          <input type="text" placeholder="Correo Electronico" name="email" onChange={handleChange} />
          <input type="text" placeholder="Direction" name="address" onChange={handleChange} />
          <input type="text" placeholder="Apto" name="apto" onChange={handleChange} />
          <input type="text" placeholder="Ciudad" name="city" onChange={handleChange} />
          <input type="text" placeholder="País" name="country" onChange={handleChange} />
          <input type="text" placeholder="Estado" name="state" onChange={handleChange} />
          <input type="text" placeholder="Codigo Postal" name="cp" onChange={handleChange} />
          <input type="text" placeholder="Telefono" name="phone" onChange={handleChange} />
        </Form>
        <InformationButtons>
          <Link to='/checkout'>
            <div>Regresar</div>
          </Link>
          <button type='submit' onClick={handleSubmit}>Pagar</button>
        </InformationButtons>
      </div>
      <div>
        <h3>Pedido: </h3>
        {
          cart.map(item => (
            <InformationItem >
              <InformationElement>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </InformationElement>
            </InformationItem>
          ))
        }
      </div>
    </InformationContainer>
  )
}
export default Information