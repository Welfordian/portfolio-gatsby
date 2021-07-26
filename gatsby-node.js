/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const youtifyPage = path.resolve('src/pages/youtify.js')

    createPage({
        path: `/blog/:slug`,
        matchPath: '/blog/:slug',
        component: blogPostTemplate,
    })

    createPage({
        path: '/youtify/:slug',
        matchPath: '/youtify/:slug',
        component: youtifyPage,
    })
}