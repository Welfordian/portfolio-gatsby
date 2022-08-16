import {ThemeProvider} from "./src/context/Layout";
import Layout from "./src/components/Layout";
import React from "react";

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import React, { Component }  from 'react';
import "./src/css/index.css"

import wrapWithProvider from "./wrap-with-provider"
import Layout from "./src/components/Layout";
import { ThemeProvider } from "./src/context/Layout";
export const wrapRootElement = wrapWithProvider

const path = require("path")
const { slash } = require(`gatsby-core-utils`)

export const wrapPageElement = ({ element, props }) => {
    return <ThemeProvider>
        <Layout {...props}>{element}</Layout>
    </ThemeProvider>
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const youtifyPage = path.resolve('src/pages/youtify.js')
    const watchTogether = path.resolve('src/components/WatchTogether/app.js');
    const chat = path.resolve('src/components/Chat/chat.js');

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

    createPage({
        path: '/chat/:slug',
        matchPath: '/chat/:slug',
        component: chat,
    })
}