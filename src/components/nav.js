import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
    <>
        <nav id="bottomnav" className="bottomnav">
            <ul className="bottomnav__menu">
                <li className="bottomnav__menu-item">
                    <Link to="/" className="bottomnav__menu-item-link" activeClassName="active">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span class="bottomnav__menu-item-label">Последние</span>
                    </Link>
                </li>
                <li className="bottomnav__menu-item">
                    <Link to="/popular" className="bottomnav__menu-item-link" activeClassName="active">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span class="bottomnav__menu-item-label">Популярные</span>
                    </Link>
                </li>
                <li className="bottomnav__menu-item">
                    <Link to="/categories" className="bottomnav__menu-item-link" activeClassName="active">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span class="bottomnav__menu-item-label">Категории</span>
                    </Link>
                </li>
                <li className="bottomnav__menu-item">
                    <Link to="/donate" className="bottomnav__menu-item-link" activeClassName="active">
                        <FontAwesomeIcon icon={faCoffee} />
                        <span class="bottomnav__menu-item-label">Пожертвовать</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
)

export default Nav