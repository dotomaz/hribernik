import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id="header"> <Link to="/">{siteTitle}</Link> </div>
    <div id="menu">
      <Link to="/">O MENI</Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/cd">CD</Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/kontakt">KONTAKT</Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/drustvo">DRUŠTVO</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
