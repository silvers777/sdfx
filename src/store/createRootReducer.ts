import { combineReducers } from 'redux'

import features from 'features'
import { MainState } from 'features/main/types'
import { SingleState } from 'features/single/types'

export type ReduxState = {
  main: MainState
  single: SingleState
}

const createRootReducer = combineReducers<ReduxState>({
  main: features.main.reducer,
  single: features.single.reducer,
})

export default createRootReducer
