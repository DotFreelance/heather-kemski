// Modules.
import PropTypes from "prop-types"
import React, { useState } from "react"
import classnames from "classnames"
import BackgroundVideo from "../../video/heather-background.mp4"

// Styles.
import "./Header.scss"

const Header = ({ siteTitle, siteSubtitle, playIntro, onEnterSite }) => {
  const [enterSite, setEnterSite] = useState(false)

  return (
    <div className="HeaderContainer">
      <header
        className={classnames("Header", {
          "play-intro": enterSite,
          "no-intro": !playIntro,
        })}
      >
        <video playsInline autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className={classnames("HeaderContent")}>
          <div className={classnames("HeaderTitle")}>
            <h1>{siteTitle}</h1>
            <h2>{siteSubtitle}</h2>
          </div>
        </div>
        {playIntro && (
          <div className={classnames("IntroFooter", { "fade-out": enterSite })}>
            <button
              onClick={() => {
                setEnterSite(true)
                onEnterSite()
              }}
            >
              Enter Site
            </button>
          </div>
        )}
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
