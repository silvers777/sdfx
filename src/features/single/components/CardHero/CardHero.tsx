import * as React from 'react'
import { useHistory } from 'react-router'
import { AboutHero } from '../../types'

import styles from './CardHero.module.scss'

type Props = {
  aboutHero: AboutHero | null
  fetchDetailedAbilityHero: (url: string) => void
}

const CardHero = (props: Props) => {
  const history = useHistory()
  const { aboutHero, fetchDetailedAbilityHero } = props

  return (
    <div className={styles.card}>
      <div className={styles.colLeft}>
        <img src='https://via.placeholder.com/350x500' alt={`${aboutHero?.name}`} className={styles.img} />
        <div className={styles.name}>{aboutHero?.name}</div>
        <div className={styles.line}></div>
        <div className={styles.about}>
          <p>id: {aboutHero?.id}</p>
          <p>Base_experience: {aboutHero?.base_experience}</p>
          <p>Height: {aboutHero?.height}</p>
          <p>Weight: {aboutHero?.weight}</p>
        </div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.box}>
          <h3 className={styles.type}>Type: {aboutHero?.types[0].type.name}</h3>
          <div className={styles.abilityBox}>
            <p className={styles.ability}>Abilities:</p>
            <ul className={styles.list}>
              {aboutHero?.abilities.map((ability, index) => {
                return (
                  <li
                    key={index}
                    className={styles.listItem}
                    onClick={() => {
                      fetchDetailedAbilityHero(ability.ability.url)
                      const url = ability.ability.url.slice(34).replace(/\//, '')
                      history.push(`/ability/${url}`)
                    }}
                  >
                    {ability.ability.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styles.boxBtn}>
          <button onClick={() => history.push('/')} className={styles.btn}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardHero
