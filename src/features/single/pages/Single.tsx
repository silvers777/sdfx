import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Single.module.scss'
import spinner from 'assets/img/spinner.gif'
import { CardHero } from '../components'

const Single = (props: PropsFromRedux) => {
  const { aboutHero, loading, fetchDetailedAbilityHero } = props

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.spinner}>
          <img src={spinner} alt='loading' className={styles.img} />
        </div>
      ) : (
        <div className={styles.content}>
          <CardHero aboutHero={aboutHero} fetchDetailedAbilityHero={fetchDetailedAbilityHero} />
        </div>
      )}
    </div>
  )
}

export default connector(Single)
