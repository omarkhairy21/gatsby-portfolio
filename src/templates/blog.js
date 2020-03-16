import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
require("prismjs/themes/prism-shades-of-purple.css");
export const query= graphql`
  query($slug: String!){
    contentfulBlogPost(slug:{eq: $slug}){
      title
      publishedData(formatString:"MMMM DD, YYYY")
      body{
        body
      }
    }
  }

`
const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
    <h1>{props.data.contentfulBlogPost.title}</h1>
    <p>{props.data.contentfulBlogPost.publishedData}</p>
    {documentToReactComponents(props.data.contentfulBlogPost.body.body, options)}
    </Layout>
  )
}

export default Blog;