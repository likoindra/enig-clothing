import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  //   default value using array to store
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // this method bellow call boolean type , so if the dropdown is true it iwll become the oppsite of it
        hidden: !state.hidden,
      }
    //   new case for ADD ITEM
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        // cartItems: [...state.cartItems, action.payload],
      }
    default:
      return state
  }
}

export default cartReducer
