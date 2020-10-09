import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReduxState } from 'store/createRootReducer'
import * as actions from '../actions'
import * as selectors from '../selectors'
import { AboutHero } from '../types'

type OwnProps = {
  aboutHero: AboutHero | null
  loading: boolean
}

const mapStateToProps = createStructuredSelector<ReduxState, OwnProps>({
  aboutHero: selectors.aboutHeroSelector,
  loading: selectors.loaderSelector,
})

const mapDispatchToProps = {}

export const connector = connect(mapStateToProps, mapDispatchToProps)
export type PropsFromRedux = ConnectedProps<typeof connector>
