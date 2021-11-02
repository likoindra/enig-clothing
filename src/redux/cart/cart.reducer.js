import CartActionTypes from './cart.types'

const INITIAL_STATE = {
  hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // this method bellow call boolean type , so if the dropdown is true it iwll become the oppsite of it
        hidden: !state.hidden,
      }
    default:
      return state
  }
}

export default cartReducer
