import React, { useEffect, useState, useReducer } from 'react'
import reducers from '../../reducers'
import { MainElement, Ul } from './styles.js'
import Form from './Form'
import Favorites from './Favorites'
import FormSearch from './FormSearch'

const Main = () => {
  const [data, setData] = useState([])
  const [dataList, setDataList] = useState([])
  const initialState = { favorites: [] }
  const [reducer, dispatch] = useReducer(reducers, initialState)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const { results } = await response.json()
      setData(results)
      setDataList(results)
    }
    fetchData()
  }, [])
  return (
    <MainElement className="main">
      <Form />
      <Favorites favorites={reducer.favorites} />
      <FormSearch setDataList={setDataList} data={data} />
      <Ul>
        {dataList.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => dispatch({ type: 'FAVORITES', payload: { id: item.id, name: item.name } })} >Favorite</button>
          </li>
        ))}
      </Ul>
    </MainElement>
  )
}
export default Main
