import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <NavLink to={'/'}> hooome</NavLink>
      <NavLink to={'/about'}> abouut</NavLink>

    </div>
  )
}

export default Navbar