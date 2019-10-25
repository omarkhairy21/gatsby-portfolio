import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import {List, Icon, Grid, GridColumn} from 'semantic-ui-react'

const socialMedia = () => {
  let socialLinks =  [
    {
      name: 'github',
      link: 'https://github.com/omarkhairy21',
     
    },{
      name:'linkedin',
      link:'https://www.linkedin.com/in/omarkhairy21/'
    },{
      name:'twitter',
      link:'https://twitter.com/omarkhairy21'
    }
  ];
 return socialLinks.map((item) => {
    return (
      <List.Item as='a' href={item.link}>
        <Icon size='big' name={item.name}/>
    </List.Item>
    )
  })
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
        <footer style={{margin:'40vh 0 5vh 0'}}>
          <Grid>
            <GridColumn width={8}>
            <p>Created by {data.site.siteMetadata.author}, © 2019</p>
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