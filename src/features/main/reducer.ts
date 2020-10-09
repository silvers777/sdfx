import { handleActions } from 'redux-actions'
import { produce } from 'immer'

import * as t from './actionTypes'
import { MainState } from './types'
import { compareName } from 'utils'

const initState: MainState = {
  list: [],
  loading: true,
}

export default handleActions(
  {
    [t.FETCH_CARD_LIST]: (state, action) =>
      produce(state, (draft) => {
        const { payload } = action
        if (payload) {
          draft.list = [...payload.list.sort(compareName)]
          draft.loading = false
        }
      }),
  },
  initState
)
