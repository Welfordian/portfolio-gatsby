/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const youtifyPage = path.resolve('src/pages/youtify.js')
    const watchTogether = path.resolve('src/components/WatchTogether/app.js');

    const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

    const { allWpPost } = result.data
    
    allWpPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}/`,
            component: slash(blogPostTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })

    createPage({
        path: '/youtify/:slug',
        matchPath: '/youtify/:slug',
        component: youtifyPage,
    })

    createPage({
        path: '/watch-together/:slug',
        matchPath: '/watch-together/:slug',
        component: watchTogether,
    })
}