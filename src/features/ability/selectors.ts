import { createSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import { AboutAbility } from './types'

type AbilityDetailedSelector = (state: ReduxState) => AboutAbility | null
type LoaderSelector = (state: ReduxState) => boolean

const getAbilityDetailedSelector: AbilityDetailedSelector = (state) => state.ability.ability
const getLoaderSelector: LoaderSelector = (state) => state.single.loading

export const abilityDetailedSelector = createSelector(getAbilityDetailedSelector, (ability) => ability)
export const loaderSelector = createSelector(getLoaderSelector, (loader) => loader)
