export const totalPrice = arr => {
  return arr.reduce((a, b) => a + b.price * b.quantity, 0)
}