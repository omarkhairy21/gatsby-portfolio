const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if(node.internal.type  === 'MarkdownRemark' ){
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name:'slug',
      value:slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const projectTemplate = path.resolve('./src/templates/project.js');

  const resOfBlogs = await graphql(`
      query {
        allContentfulBlogPost {
              edges {
                  node {
                     slug
                  }
              }
          }
      }
  `)
  const resOfProjects = await graphql(`
      query {
      allMarkdownRemark {
        edges {
            node {
                fields {
                    slug
                }
            }
        }
    }
  `)
  /**
   * Handle errors Exception  
   */
  if (resOfBlogs.errors || resOfProjects ) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  resOfBlogs.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.slug}`,
        context:{
          slug: edge.node.slug
        }
      });
    });

    resOfProjects.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
          component: projectTemplate,
          path: `/projects/${edge.node.fields.slug}`,
          context: {
              slug: edge.node.fields.slug
          }
      });
  });

}