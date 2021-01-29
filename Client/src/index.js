import React from 'react'
import { render } from 'react-dom'
import Header from '@components/Header'
import { Provider } from './Context'

render(
  <Provider>
    <Header />
  </Provider>,
  document.getElementById('app')
)