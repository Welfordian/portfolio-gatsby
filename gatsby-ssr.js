/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React, { Component }  from 'react';
import "./src/css/index.css"

import wrapWithProvider from "./wrap-with-provider"
import Layout from "./src/components/Layout";
import { ThemeProvider } from "./src/context/Layout";
export const wrapRootElement = wrapWithProvider

export const wrapPageElement = ({ element, props }) => {
    return <ThemeProvider>
        <Layout {...props}>{element}</Layout>
    </ThemeProvider>
}


export function onRenderBody(
    { setHeadComponents }
) {
    setHeadComponents([
        <script async src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.3/dist/lazyload.min.js"></script>,
        <link rel="preconnect" href="https://imagedelivery.net" />,
        <link rel="dns-prefetch" href="https://imagedelivery.net" />,
        <link rel="preconnect" href="https://api.welford.me" />,
        <link rel="dns-prefetch" href="https://api.welford.me" />
    ]);
}