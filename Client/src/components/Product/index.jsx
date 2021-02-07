import React from 'react'
import { Item, Img, Info, Button } from './styles'

const Product = ({ product, handleAddToCart }) => {
  return (
    <Item>
      <Img src={product.image} alt={product.title} />
      <Info>
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </Info>
      <Button type="button" onClick={handleAddToCart(product)}>Comprar</Button>
    </Item>
  )
}
export default Product