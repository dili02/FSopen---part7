import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import HomePage from '../pages/Home.page'
import NotFoundPage from '../pages/NotFound.page'
import UsersPage from '../pages/Users.page'
import BlogDetailPage from '../pages/BlogDetail.page'
import LoginPage from '../pages/Login.page'
import UserDetail from '../pages/UserDetail.page'

import Header from '../components/Header/Header'
import Notification from '../components/Notification/Notification'

export default function AppRouter () {
  const { isUserLogged } = useAuth()
  return (
    <>
      <Header />
      <Notification />
      <Switch>
        <Route
          exact
          path='/login'
          render={() => {
            return isUserLogged()
              ? <Redirect to='/' />
              : <LoginPage />
          }}
        />
        <Route exact path='/users' component={UsersPage} />
        <Route exact path='/user/:id' component={UserDetail} />
        <Route exact path='/blog/:id' component={BlogDetailPage} />
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </>
  )
}
