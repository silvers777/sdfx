import { applyMiddleware, createStore, PreloadedState } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer, { ReduxState } from './createRootReducer'

const configureStore = (preloadedState?: PreloadedState<ReduxState>) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnchancer = applyMiddleware(...middlewares)

  const enchancers = [middlewareEnchancer] // Add any enchancers here
  const composedEnchancers = composeWithDevTools(...enchancers)

  const store = createStore(createRootReducer, preloadedState, composedEnchancers)

  return store
}

export default configureStore
