import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO';
import { Header, List, Image } from 'semantic-ui-react';

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                          thumbnail{
                            childImageSharp {
								fixed(width: 50, height: 50) {
                                   src     
                            }
                         }
                        }
                      }
                  }
              }
          }
      }
  `)
    // const thumbnail = data.allMarkdownRemark.frontmatter.thumbnail.childImageSharp;
  return (
      <Layout>
          <SEO title="Projects"/>
          <Header as='h1'>Projects</Header>
          <List divided relaxed verticalAlign >
              {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                    <List.Item style={{marginBottom:'1vh'}}>
                          <Image  src={`${edge.node.frontmatter.thumbnail.childImageSharp.fixed.src}`} inline='true'/>
                        <List.Content>
                          <List.Header as='h2' style={{marginBottom:'0.5rem'}}> 
                          <Link to={`/projects`}>
                            {edge.node.frontmatter.title}
                          </Link>
                          </List.Header>
                        
                          <List.Description style={{marginLeft:'0.5rem', fontSize:'small'}}>
                          {edge.node.frontmatter.date}
                           </List.Description>
                      </List.Content>
                    </List.Item>
                  )
              })}
          </List>
      </Layout>
  )
}

export default ProjectPage;