// Modules.
import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"

// Styles.
import "./NavBar.scss"

// Constants.
const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Samples", path: "/samples" },
  { title: "Walk-Throughs", path: "/walk-throughs" },
  { title: "In The Works", path: "/in-the-works" },
  { title: "CV", path: "/cv" },
  { title: "Contact", path: "/contact" },
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
