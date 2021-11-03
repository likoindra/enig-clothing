import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action'
// method di dalam import ini akan menggantikan method itemCount, yang dimana cartItems.reduce akan dipindah ke cart-selector dan mengembalikan ke dalam cart-icon
import { selectCartItemsCount } from '../../redux/cart/cart-selector'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

// method ini akan meng-akumulasi angka yang ada pada dalam quantity
const mapSateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
  // cartItems.reduce(
  //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  //   0,
  // ),
})

// passing null as a default
export default connect(mapSateToProps, mapDispatchToProps)(CartIcon)
