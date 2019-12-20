import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import {List, Icon, Grid, GridColumn, Image} from 'semantic-ui-react'
import findTheSource from '../../Data/gears';
import { socialLinks } from '../../Data/Social-Media';

const socialMedia = () => {
 return socialLinks.map((item) => {
    return (
      <List.Item as='a' href={item.link}>
        <Icon size='big' style={item.style} name={item.name}/>
    </List.Item>
    )
  })
}

const footerStyle= {
    margin:'3vh 0 0s 0',
    borderTopStyle: 'solid',
    borderColor:'#03a9f44f', 
    padding:'2rem 0'
  }


const Footer = () => {
  const data = useStaticQuery(graphql`
        query {
         site {
            siteMetadata {
              author
            }
	        }
    }
  `)
    return (
        <footer style={footerStyle} >
          <Grid columns='16'>
            <GridColumn width={8}>
            <p style={{lineHeight:'5vh'}}>Created by {data.site.siteMetadata.author}
            , © 2019 <span  style={{marginLeft: '5px'}}>
            <Image centered  size='mini' src={findTheSource('netlify')} style={{display:'inline', width:'25px'}}/>
            </span><span style={{marginLeft: '5px'}}>
            <Image centered  size='mini' src={findTheSource('gatsby')} style={{display:'inline', width:'25px'}}/>   
            </span>
            </p>
            </GridColumn>
            <GridColumn width={8}>
            <List floated='right' horizontal>
              { socialMedia() }
              </List> 
            </GridColumn>
          </Grid>
        </footer>
    );
};

export default Footer;