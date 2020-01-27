import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/SEO';
import { Header, List } from 'semantic-ui-react';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort:{fields:publishedData, order:DESC}) {
                edges{
                node{
                        title
                        publishedData(formatString:"MMMM DD, YYYY")
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
          <SEO title="Blog"/>
          <Header as='h1'>Blog</Header>
          <List divided relaxed verticalAlign >
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                            <List.Item style={{marginBottom:'1vh'}}>
                            <List.Content>
                            <List.Header as='h2' style={{marginBottom:'0.5rem'}}> 
                            <span role="img">&#9981;</span>
                            <Link to={`/blog/${edge.node.slug}`}>
                            {edge.node.title}
                            </Link>
                            </List.Header>
                            <List.Description style={{marginLeft:'2rem', fontSize:'small'}}>{edge.node.publishedData}</List.Description>
                            </List.Content>
                            </List.Item>
                    )
                })}
            </List>
        </Layout>
    )
}

/**
 * 
 * 
 *           
 * 
 *         query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
        <List divided relaxed verticalAlign >
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                            <List.Item style={{marginBottom:'1vh'}}>
                            <List.Content>
                            <List.Header as='h2' style={{marginBottom:'0.5rem'}}> <span>&#9981;</span><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></List.Header>
                            <List.Description as='a'  style={{marginLeft:'2rem', fontSize:'small'}}>{edge.node.frontmatter.date}</List.Description>
                            </List.Content>
                            </List.Item>
                    )
                })}
            </List >
 */
export default BlogPage