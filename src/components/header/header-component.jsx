import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

// special syntax saat meng- import SVG di React
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      
      
      {/* Drilling props is bad pattern */}
    </div>
  </div>
)



// this naming can be anything. it just standard from redux 
// state di bawahh ini adalah root-reducer 
const mapStateToProps  = state => ({
  currentUser: state.user.currentUser
})
// pass 2 function from importing connect 
// allow to connect to state
// passing mapTostate inside connect()
export default connect(mapStateToProps)(Header)
