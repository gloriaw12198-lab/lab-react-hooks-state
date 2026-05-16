import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle