import React, { useEffect } from 'react'
import { connector, PropsFromRedux } from './container'
import { useHistory } from 'react-router'

import spinner from 'assets/img/spinner.gif'
import styles from './Main.module.scss'

const Main = (props: PropsFromRedux) => {
  const { fetchCardList, fetchAbilityHero, listItem, loading } = props
  const history = useHistory()

  useEffect(() => {
    fetchCardList()
  }, [fetchCardList])

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.spinner}>
          <img src={spinner} alt='loading' className={styles.img} />
        </div>
      ) : (
        <div className={styles.list}>
          {listItem.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.card}
                onClick={() => {
                  fetchAbilityHero(item.url)
                  const url = item.url.slice(34).replace(/\//, '')
                  history.push(`/pokemon/${url}`)
                }}
              >
                <img src='https://via.placeholder.com/148x200' alt='card' />
                <p className={styles.name}>{item.name}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default connector(Main)
