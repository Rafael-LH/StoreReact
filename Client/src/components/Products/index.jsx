import React from 'react'
import Product from '@components/Product'
import { Items } from './styles'

const Products = ({ products }) => {
  return (
    <div>
      <Items>
        {products.map(item => <Product key={item.id} product={item} />)}
      </Items>
    </div>
  )
}
export default Products