import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/homepage.component'
import ShopPage from './pages/Shop/shop.component'
import Header from './components/header/header-component'
import SignInAndSignUpPage from './pages/SignInAndSignUp/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'
// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// )

class App extends React.Component {
  // menggunkaan class component dengan extends React.Component untuk mengakses state
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  // firebase method
  unsubscribeFromAuth = null

  componentDidMount() {
    // firebase method that call auth
    // open messaging system betwee application and firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        {/* Header akan terus muncul pada web, Header akan menjadi tombol nacgigas */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          {/* bagian HomePage adalah bagian awal jadi untuk path nya hanya '/'  */}
          {/* Route hanya melempar 1 child yaitu child didalam itu sendiri */}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          {/* <Route path="/hats" component={HatsPage} /> */}
        </Switch>
      </div>
    )
  }
}

export default App

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
{
}
{
  /* <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/> */
}
//       </div>
//     );
//   }
// }

// export default App;
