/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
import React from "react";


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