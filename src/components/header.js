import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Q from "../images/yinq-yanq-colour.png"

const Header = ({ siteTitle }) => (
  <header>
    <img src={Q} alt="" style={{ width: "50px" }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
