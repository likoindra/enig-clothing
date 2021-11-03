//  di dalam selector ini, fungsi yang ada pada icon dropdown akan selalu muncul meskopun user tidak login

import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
)
// end of cartSelectorHidden

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    ),
)

// method ini akan meng-akumulasi total harga dari quantity yang ada pada checkout
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
