import React from 'react'
import { Switch, Route } from 'react-router-dom'

import features from 'features'
import { MainLayout } from 'components/MainLayout'

export const Router = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={features.main.pages.Main} />
        <Route path='/pokemon/:id' component={features.single.pages.Single} />
      </Switch>
    </MainLayout>
  )
}
