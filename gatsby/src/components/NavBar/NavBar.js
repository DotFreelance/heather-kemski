// Modules.
import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"

// Styles.
import "./NavBar.scss"

// Constants.
const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Samples", path: "/" },
  { title: "Walk-Throughs", path: "/" },
  { title: "In The Works", path: "/" },
  { title: "CV", path: "/" },
  { title: "Contact", path: "/" },
]

const NavBar = ({ enterSite }) => {
  return (
    <div className={classnames("NavBar")}>
      <ul className="NavList">
        {NAV_ITEMS.map((item, index) => (
          <li
            className={classnames("NavItem", { "animate-in": enterSite })}
            key={index}
            style={{ "--offset": `${index * 0.1}s` }}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
