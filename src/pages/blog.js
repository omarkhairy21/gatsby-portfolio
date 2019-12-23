import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head';
import { Header, List } from 'semantic-ui-react';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
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
    `)

    return (
        <Layout>
          <Head title="Blog"/>
          <Header as='h1'>Blog</Header>
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
        </Layout>
    )
}

export default BlogPage