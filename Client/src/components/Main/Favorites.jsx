import React from 'react'
import { FavoritesContent } from './styles'

const FavoritesComponent = ({ favorites }) => {
  return (
    <FavoritesContent>
      <h1>Favorites</h1>
      {favorites.map(item => <p key={item.id}>{item.name}</p>)}
    </FavoritesContent>
  )
}
const Favorites = React.memo(FavoritesComponent, (oldProps, newProps) => oldProps.favorites.length === newProps.favorites.length)
export default Favorites