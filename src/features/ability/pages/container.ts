import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as selectors from '../selectors'
import { AboutAbility } from '../types'

type OwnProps = {
  abilityDetailed: AboutAbility | null
  loading: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  abilityDetailed: selectors.abilityDetailedSelector,
  loading: selectors.loaderSelector,
})

const mapDispatchToProps = {}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
