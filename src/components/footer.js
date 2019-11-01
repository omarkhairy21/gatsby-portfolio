import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import {List, Icon, Grid, GridColumn} from 'semantic-ui-react'

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
    margin:'30vh 0 5vh 0',
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
        <footer style={footerStyle}>
          <Grid columns='16'>
            <GridColumn width={8}>
            <p style={{lineHeight:'5vh'}}>Created by {data.site.siteMetadata.author}, © 2019  
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