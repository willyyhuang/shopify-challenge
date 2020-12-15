import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './models'
import Dashboard from './Dashboard'
import './index.css'

const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
