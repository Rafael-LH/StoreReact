import React, { useContext } from 'react'
import Product from '@components/Product'
import { Items } from './styles'
import { Context } from '@context/Context'

const Products = () => {
  const { data: { products }, addToCart } = useContext(Context)

  const handleAddToCart = product => (e) => {
    e.preventDefault()
    addToCart(product)
  }
  return (
    <div>
      <Items>
        {products.map(item => <Product key={item.id} product={item} handleAddToCart={handleAddToCart} />)}
      </Items>
    </div>
  )
}
export default Products