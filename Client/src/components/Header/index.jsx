import React, { useState, useEffect, useContext, useReducer } from 'react'
import { Context } from '../../Context'
import reducers from '../../reducers'

const Header = () => {
  const initialState = {
    counter: 0
  }
  const { user, userUpdate } = useContext(Context)
  const [darkMode, setDarkMode] = useState(() => {
    return parseInt(localStorage.getItem('isDarkMode')) ? 1 : 0
  })
  const [form, setForm] = useState({})
  const [reducer, dispatch] = useReducer(reducers, initialState)

  const changeColor = () => {
    if (!darkMode) {
      localStorage.setItem('isDarkMode', 1)
      document.getElementById('element-body').style.background = 'black'
      document.getElementById('element-h1').style.color = '#fff'
      setDarkMode(true)
    } else {
      setDarkMode(false)
      localStorage.setItem('isDarkMode', 0)
      document.getElementById('element-body').style.background = '#fff'
      document.getElementById('element-h1').style.color = 'black'
    }
  }
  const handleDarkMode = (_) => {
    changeColor()
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    userUpdate(form)
  }
  useEffect(() => {
    if (darkMode) {
      document.getElementById('element-body').style.background = 'black'
      document.getElementById('element-h1').style.color = '#fff'
    } else {
      document.getElementById('element-body').style.background = '#fff'
      document.getElementById('element-h1').style.color = 'black'
    }
  }, [])

  return (
    <div className="header">
      <h1 id="element-h1">ReactHooks</h1>
      <h1>{user.name} {user.lastName}</h1>
      <button type="button" onClick={handleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' onChange={handleChange} />
        <input type="text" name='lastName' placeholder='Last Name' onChange={handleChange} />
        <button type='submit'>Save</button>
      </form>
      <p> <b> Counter:</b> {reducer.counter}</p>
      <button onClick={() => dispatch({ type: 'DECREASE', payload: 1 })} >Decrease</button>
      <button onClick={() => dispatch({ type: 'ENCREASE', payload: 1 })} >Increase</button>
    </div>
  )
}
export default Header


