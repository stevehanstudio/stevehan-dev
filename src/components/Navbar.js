import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import ThemeSwitch from './themeSwitch'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({toggle}) => {
  return (
    <nav>
      <div className="nav-center">
        <ThemeSwitch />
        <div className="nav-header">
          <div className="nav-title">
            <h1>Steve Han</h1>
            <h4>React - NodeJS</h4>
            <SocialLinks styleClass="nav-icons" />
          </div>
          <Links styleClass="nav-links" />
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
