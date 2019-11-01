import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Menu, Image, Button} from 'semantic-ui-react'
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
    border: 'none',
    display:'flex',
    margin: '2vh 0'

  }
  return (
    <Menu  secondary pointing borderless  style={StyleMenu}>
        <Menu.Item style={{padding: '0 0'}}>
          <Button basic  animated>
          <Button.Content hidden inverted>
          <Link  to="/">
            { data.site.siteMetadata.title }
          </Link>
          </Button.Content>
          <Button.Content visible >
            <Image src={logo} />
          </Button.Content>
          </Button>
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
