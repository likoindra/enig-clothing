import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

// special syntax saat meng- import SVG di React
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'></Link>
      }
    </div>
  </div>
)

export default Header
