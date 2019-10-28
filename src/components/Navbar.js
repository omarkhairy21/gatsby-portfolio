import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {Container, Grid, Header, Image, Menu} from 'semantic-ui-react'
import headerStyles from '../styles/header.module.scss';
import logo from '../../static/wall.png';
const Navbar = () => {
  const data  = useStaticQuery(graphql`
    query {
      site {
            siteMetadata {
              title
            }
	        }
    }
  `)
  const StyleMenu = {
    border: 'none'
  }
  return (
    <Menu  secondary pointing borderless style={StyleMenu}>
        <Menu.Item as='a' >
        <Link to='/'><Image src={logo} /></Link>
        </Menu.Item>
          <Menu.Item className={headerStyles.navbarLinks}  as='a' position='right' link='true' color='blue'>
           <Link to='/about'>ME</Link>
          </Menu.Item>
          <Menu.Item as='a' >
          <Link to='/blog'>Blog</Link>
          </Menu.Item>
          <Menu.Item as='a' >
          <Link to='/projects'>Projects</Link>
          </Menu.Item>
    </Menu>
  )
}

export default Navbar
