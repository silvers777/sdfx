import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import { ListItem } from './types'

type ListSelector = (state: ReduxState) => ListItem[]
type LoaderSelector = (state: ReduxState) => boolean

const getListSelector: ListSelector = (state) => state.main.list
const getLoaderSelector: LoaderSelector = (state) => state.main.loading

export const listSelector = createSelector(getListSelector, (listItem) => listItem)

export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
