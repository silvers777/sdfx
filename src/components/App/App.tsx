import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { Router } from '../Router'
import configureStore from 'store'

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  )
}

export default App
