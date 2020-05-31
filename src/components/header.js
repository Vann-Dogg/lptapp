import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Header = ({ data }) => (
  <header id="header">
    <div className="back-block"></div>
    <div className="logo-block">
      <img src="//listenpraythink.com/wp-content/uploads/2017/09/logo.png" alt="logo" width="100" />
    </div>
    <div className="setting-block">
      <FontAwesomeIcon icon={ faCog } />
    </div>
  </header>
)

export default Header
