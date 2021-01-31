const reducers = (state, action) => {
  switch (action.type) {
    case 'FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}
export default reducers