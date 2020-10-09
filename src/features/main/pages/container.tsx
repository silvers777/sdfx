import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from '../actions'
import * as selectors from '../selectors'
import { ListItem } from '../types'

type OwnProps = {
  listItem: ListItem[]
  loading: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  listItem: selectors.listSelector,
  loading: selectors.loaderSelector,
})

const mapDispatchToProps = {
  fetchCardList: actions.fetchCardList,
  fetchAbilityHero: actions.fetchAbilityHero,
}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
