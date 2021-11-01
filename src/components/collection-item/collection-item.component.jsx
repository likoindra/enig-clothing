import React from 'react'
import './collection-item.styles.scss'

// id, name , price , imageUrl itu dari props yang ada pada SHOP_DATA
const ColletionItem = ({ id, name, price, imageUrl }) =>  (

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
  </div>
)

export default ColletionItem
