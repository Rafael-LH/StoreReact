export const sumTotal = (cart) => {
  const reducer = (acc, cvalue) => acc + cvalue.price
  const sum = cart.reduce(reducer, 0)
  return sum
}