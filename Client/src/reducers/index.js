const reducers = (state, action) => {
  switch (action.type) {
    case 'ENCREASE':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}
export default reducers