import * as t from '../actionTypes'
import axios, { AxiosResponse } from 'axios'

type Response = {
  abilities: []
  base_experience: 157
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  name: string
  order: number
  species: {}
  sprites: {}
  stats: []
  types: []
  weight: 650
}

type Payload = {
  about: {}
}

export type FeatchAbilityHeroAction = FSA<undefined, Payload, string>
type FetchAbilityHero = (api: string) => MrxThunk<FeatchAbilityHeroAction>

export const fetchAbilityHero: FetchAbilityHero = (api) => async (dispatch) => {
  dispatch({
    type: t.FETCH_ABILITI_HERO,
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
      type: t.FETCH_ABILITI_HERO,
      payload: {
        about: { ...data },
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.FETCH_ABILITI_HERO,
      payload: error,
      error: true,
    })
  }
}
