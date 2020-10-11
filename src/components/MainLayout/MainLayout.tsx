import React, { ReactNode } from 'react'
import { useHistory, useLocation } from 'react-router'

import styles from './MainLayout.module.scss'

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const { children } = props

  const textHeader = () => {
    if (pathname === '/') {
      return 'List heros'
    } else if (pathname.slice(1, 8) === 'pokemon') {
      return 'About hero'
    } else if (pathname.slice(1, 8) === 'ability') {
      return 'List ability'
    }
  }

  console.log(pathname.slice(1, 8))
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p
              onClick={() => {
                history.push('/')
              }}
            >
              Web<span>App</span>
            </p>
          </div>
          <div className={styles.title}>{textHeader()}</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>Copyright © 2020</div>
      </footer>
    </div>
  )
}

export default MainLayout
