import { handleActions } from 'redux-actions'
import { produce } from 'immer'
import * as ts from 'features/single/actionTypes'
import { AbilityState } from './types'

const initState: AbilityState = {
  ability: null,
  loading: true,
}

export default handleActions(
  {
    [ts.FETCH_INFO_ABILITY]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action
        if (payload) {
          draft.ability = payload.ability
          draft.loading = false
        }
      }),
  },
  initState
)
