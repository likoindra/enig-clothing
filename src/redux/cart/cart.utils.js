export const addItemToCart = (cartItems, cartItemtoAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoAdd.id,
  )

  if (existingCartItem) {
    // this code below will return new array from cartItems
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
}
