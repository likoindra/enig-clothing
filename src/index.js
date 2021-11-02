import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/store'

ReactDOM.render(
  // membungkus App dengan BrowserRouter untuk mengakses routing pada App
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
