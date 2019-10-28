import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import {List, Icon, Grid, GridColumn} from 'semantic-ui-react'

const socialMedia = () => {
  let S3resume= 'https://khairy-resume.s3-us-west-1.amazonaws.com/OmarResume.pdf';
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
        <footer style={{margin:'30vh 0 5vh 0', borderTopStyle: 'solid', borderColor:'#03a9f44f', padding:'2rem 0'}}>
          <Grid columns='16'>
            <GridColumn width={7}>
            <p>Created by {data.site.siteMetadata.author}, © 2019  
            </p>
            </GridColumn>
            <GridColumn width='3'>
              <a href='https://khairy-resume.s3-us-west-1.amazonaws.com/OmarResume.pdf'>&#127941;resume</a>
            </GridColumn>
            <GridColumn width={6}>
            <List floated='right' horizontal>
              { socialMedia() }
              </List> 
            </GridColumn>
          </Grid>
        </footer>
    );
};

export default Footer;