import { handleActions } from 'redux-actions'
import { produce } from 'immer'
import * as tm from '../main/actionTypes'
import { SingleState } from './types'

const initState: SingleState = {
  about: null,
  loading: true,
}

export default handleActions(
  {
    [tm.FETCH_ABILITI_HERO]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action
        if (payload) {
          draft.about = payload.about
          draft.loading = false
        }
      }),
  },
  initState
)
