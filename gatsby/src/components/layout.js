// Modules.
import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import AOS from "aos"

// Components.
import Header from "./Header"

// Styles.
import "./layout.scss"
import "aos/dist/aos.css"

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

  useLayoutEffect(() => {
    if (playIntro && enterSite) {
      AOS.init({ delay: 3000, duration: 1000, once: true })
    } else if (!playIntro) {
      AOS.init({ delay: 2500, duration: 1000, once: true })
    }
  }, [enterSite, playIntro])

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
      <div className={classnames("Layout")}>
        <main data-aos="fade-in">{children}</main>
        <footer data-aos="fade-in">
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
