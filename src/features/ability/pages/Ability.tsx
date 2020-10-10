import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Ability.module.scss'
import spinner from 'assets/img/spinner.gif'
import AbilityItem from '../components/AbilityItem/AbilityItem'

const Ability = (props: PropsFromRedux) => {
  const { loading, abilityDetailed } = props

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.spinner}>
          <img src={spinner} alt='loading' className={styles.img} />
        </div>
      ) : (
        <AbilityItem abilityDetailed={abilityDetailed} />
      )}
    </div>
  )
}

export default connector(Ability)
