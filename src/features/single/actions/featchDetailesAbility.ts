import * as t from '../actionTypes'
import axios, { AxiosResponse } from 'axios'
import { AboutAbility } from 'features/ability/types'

type Response = AboutAbility

type Payload = {
  ability: {}
}

export type FetchDetailedAbilityAction = FSA<undefined, Payload, string>
type FetchDetailedAbilityHero = (api: string) => MrxThunk<FetchDetailedAbilityAction>

export const fetchDetailedAbilityHero: FetchDetailedAbilityHero = (api) => async (dispatch) => {
  dispatch({
    type: t.FETCH_INFO_ABILITY,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios({
      method: 'GET',
      url: `${api}`,
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    dispatch({
      type: t.FETCH_INFO_ABILITY,
      payload: {
        ability: { ...data },
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.FETCH_INFO_ABILITY,
      payload: error,
      error: true,
    })
  }
}
