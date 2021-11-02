import React from 'react'
// call action ADD_ITEM for redux
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'
//
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss'

// id, name , price , imageUrl itu dari props yang ada pada SHOP_DATA
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to cart{' '}
      </CustomButton>
    </div>
  )
}
// this function will represent the ADD_ITEM type function
const mapDispatchToProps = (dispatch) => ({
  // this will recieve the item as property and passing it addItem
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
