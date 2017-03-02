import CustomStyle from './sass/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppContainer } from 'react-hot-loader'

import App from './app/app'
import reducer from './app/reducers/rootReducer'
import initState from '../data/initState'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// Setup Redux store
const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(reducer, initState)

// Fire up the app
const render = Component => {
  ReactDOM.render(
    <AppContainer><Provider store={store}><Component /></Provider></AppContainer>,
    document.querySelector('.container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('react-redux', () => { render(Provider) })
}
