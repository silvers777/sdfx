import React from 'react'
import { useHistory } from 'react-router'

import styles from './Ability.module.scss'
import { AboutAbility } from '../../types'

type Props = {
  abilityDetailed: AboutAbility | null
}

const AbilityItem = (props: Props) => {
  const history = useHistory()
  const { abilityDetailed } = props

  return (
    <div className={styles.abilityItem}>
      <h1 className={styles.title}>Abilities Detailed</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          {abilityDetailed?.effect_entries.map((item, index) => (
            <li key={index} className={styles.item}>
              {item.effect}
            </li>
          ))}
        </ul>
        <div className={styles.boxBtn}>
          <button className={styles.btn} onClick={() => history.goBack()}>
            back to hero
          </button>
        </div>
      </div>
    </div>
  )
}

export default AbilityItem
