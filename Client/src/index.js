import React from 'react'
import { render } from 'react-dom'
import Main from '@components/Main'
import { Provider } from './Context'

render(
  <Provider>
    <Main />
  </Provider>,
  document.getElementById('app')
)