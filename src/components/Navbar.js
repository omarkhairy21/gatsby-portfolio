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
    <Menu  secondary pointing  style={StyleMenu}>
        <Menu.Item as='a' position='left'>
          <Image src={logo} /> 
          <Link  className={headerStyles.title} to='/'> Khairy</Link>
        </Menu.Item>
          <Menu.Item  as='a' position='right'>
            ME
          </Menu.Item>
          <Menu.Item as='a'>
            Blog
          </Menu.Item>
          <Menu.Item as='a'>
            Projects
          </Menu.Item>
    </Menu>
  )
}

export default Navbar
