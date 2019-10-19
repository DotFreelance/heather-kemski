// Modules.
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

// Components.
import Header from "./Header"
import NavBar from "./NavBar"

// Styles.
import "./layout.scss"

const Layout = ({ children, playIntro }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  const [enterSite, setEnterSite] = useState(false)

  return (
    <section
      className={classnames("SiteContainer", {
        "entered-site": !playIntro || enterSite,
      })}
    >
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteSubtitle={data.site.siteMetadata.subtitle}
        playIntro={playIntro}
        onEnterSite={() => setEnterSite(true)}
      />
      <NavBar enterSite={enterSite} />
      <div className={classnames("Layout")}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  playIntro: PropTypes.bool,
}

Layout.defaultProps = {
  playIntro: false,
}

export default Layout
