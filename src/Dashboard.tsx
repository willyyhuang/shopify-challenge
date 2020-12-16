import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {BasicLayout} from './views'

const Dashboard = () => (
  <BrowserRouter>
    <Route path='*' component={BasicLayout} />
  </BrowserRouter>
)

Dashboard.displayName = 'Dashboard'
export default Dashboard
