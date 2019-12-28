import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Menu, Image} from 'semantic-ui-react'
import headerStyles from '../styles/header.module.scss';
import logo from '../../static/monster.svg';
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
    borderBottom: ' rgba(3, 169, 244, 0.31) 2px solid',
    display:'flex',
    margin: '2vh 0'

  }
  return (
    <Menu  secondary pointing borderless  style={StyleMenu}>
        <Menu.Item style={{padding: '1vh 0'}}>
          {/*
          <Button basic  >
          <Button.Content  >
           <Link  to="/">
            { data.site.siteMetadata.title }
          </Link> 
            <Image src={logo} />
          </Button.Content>
          </Button>
          Omar
          */}
          <Image  src={logo} avatar />
            <span className={headerStyles.title}><Link to='/'>KHAIRY</Link></span>
        </Menu.Item>
        
          <Menu.Item className={headerStyles.navbarLinks}   position='right' link='true' color='blue'>
           <Link to='/about'>ME</Link>
          </Menu.Item>
          <Menu.Item >
          <Link to='/blog'>Blog</Link>
          </Menu.Item>
          <Menu.Item>
          <Link to='/projects'>Projects</Link>
          </Menu.Item>
    </Menu>
  )
}

export default Navbar
