import React from 'react'
import { render } from 'react-dom'
import App from './routes/App'
import { Provider } from './Context'

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
)