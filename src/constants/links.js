import React from "react"
import { Link } from "gatsby"
const Links = ({ styleClass, children }) => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
