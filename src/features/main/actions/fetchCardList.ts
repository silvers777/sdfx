import * as t from '../actionTypes'
import axios, { AxiosResponse } from 'axios'

const API = 'https://pokeapi.co/api/v2'

type Response = {
  count: number //count card
  next: string // API request list
  results: {
    name: string //name hero
    url: string //Api request hero
  }[]
}

type Payload = {
  list: {
    name: string
    url: string
  }[]
}

export type FeatchCardListAction = FSA<undefined, Payload, string>
type FetchCardList = () => MrxThunk<FeatchCardListAction>

export const fetchCardList: FetchCardList = () => async (dispatch) => {
  dispatch({
    type: t.FETCH_CARD_LIST,
    meta: { done: false },
  })

  try {
    const { data }: AxiosResponse<Response> = await axios({
      method: 'GET',
      url: `${API}/pokemon?limit=0&offset=20`,
    })

    if (!data) {
      throw new Error('Response body is empty!')
    }

    const { results } = data

    if (!results) {
      throw new Error("Can't get card list items!")
    }

    dispatch({
      type: t.FETCH_CARD_LIST,
      payload: {
        list: [...results],
      },
      meta: { done: true },
    })
  } catch (error) {
    dispatch({
      type: t.FETCH_CARD_LIST,
      payload: error,
      error: true,
    })
  }
}
