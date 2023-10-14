import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from "./Calculator"
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </React.StrictMode>,
)
