import { applyMiddleware, createStore, PreloadedState } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer, { ReduxState } from './createRootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['single', 'ability'],
}

const configureStore = (preloadedState?: PreloadedState<ReduxState>) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnchancer = applyMiddleware(...middlewares)

  const enchancers = [middlewareEnchancer] // Add any enchancers here
  const composedEnchancers = composeWithDevTools(...enchancers)

  const persistedReducer = persistReducer(persistConfig, createRootReducer)
  const store = createStore(persistedReducer, preloadedState, composedEnchancers)

  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore
