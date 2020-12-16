import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import React from 'react'
import {BasicLayout} from './views'

const Dashboard = () => (
  <BrowserRouter>
    <Route path='/dashboard' component={BasicLayout} />
    <Route path='/*'>
      <Redirect to='/dashboard' />
    </Route>
  </BrowserRouter>
)

Dashboard.displayName = 'Dashboard'
export default Dashboard
