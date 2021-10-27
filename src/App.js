import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/homepage.component'
import ShopPage from './pages/Shop/shop.component'
import Header from './components/header/header-component'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// )

function App() {
  return (
    <div>
      {/* Header akan terus muncul pada web, Header akan menjadi tombol nacgigas */}
      <Header/>
      <Switch>
        {/* bagian HomePage adalah bagian awal jadi untuk path nya hanya '/'  */}
        {/* Route hanya melempar 1 child yaitu child didalam itu sendiri */}
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/hats" component={HatsPage} /> */}
      </Switch>
    </div>
  )
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
