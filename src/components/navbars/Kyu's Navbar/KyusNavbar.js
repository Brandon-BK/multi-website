import React from 'react'
import './KyusNavbar.css'

const KyusNavbar = () => {
  return (
    <div>
        <nav id='navbar'>
          <div id='logo'>
            <a href='#'><h1>Kyu🤌</h1></a>
          </div>

          <div id='links'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <span id='login'><a href='#'>Log in</a></span>
          </div>
        </nav>
    </div>
  )
}

export default KyusNavbar