import React from 'react'
import { products } from '../../initialState.json'
import Products from '@components/Products'

const Home = () => {
  return (
    <Products products={products} />
  )
}
export default Home