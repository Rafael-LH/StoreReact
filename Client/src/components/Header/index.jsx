import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = (_) => setDarkMode(!darkMode)

  return (
    <div className="header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleDarkMode}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}
export default Header


