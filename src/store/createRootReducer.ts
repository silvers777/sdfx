import { combineReducers } from 'redux'

import features from 'features'
import { MainState } from 'features/main/types'
import { SingleState } from 'features/single/types'
import { AbilityState } from '../features/ability/types'

export type ReduxState = {
  main: MainState
  single: SingleState
  ability: AbilityState
}

const createRootReducer = combineReducers<ReduxState>({
  main: features.main.reducer,
  single: features.single.reducer,
  ability: features.ability.reducer,
})

export default createRootReducer
