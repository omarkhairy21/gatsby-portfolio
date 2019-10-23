import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from '../styles/header.module.scss';
import logo from '../../static/wall.png';

const Header = () => {
  const data  = useStaticQuery(graphql`
    query {
      site {
            siteMetadata {
              title
            }
	        }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.brand}>
        <Link className={headerStyles.title} to="/">
            <img src={logo} /> 
            <span>{ data.site.siteMetadata.title }</span>
        </Link>
      </nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
    </header>
  )
}

export default Header
