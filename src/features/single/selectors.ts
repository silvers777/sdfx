import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import { AboutHero } from './types'

type AboutHeroSelector = (state: ReduxState) => AboutHero | null
type LoaderSelector = (state: ReduxState) => boolean

const getAboutHeroSelector: AboutHeroSelector = (state) => state.single.about
const getLoaderSelector: LoaderSelector = (state) => state.single.loading

export const aboutHeroSelector = createSelector(getAboutHeroSelector, (listItem) => listItem)
export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
