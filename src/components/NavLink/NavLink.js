import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
)

export default NavLink
