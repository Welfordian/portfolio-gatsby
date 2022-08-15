/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { Component }  from 'react';
import "./src/css/index.css"

import wrapWithProvider from "./wrap-with-provider"
import Layout from "./src/components/Layout";
import { ThemeProvider } from "./src/context/Layout";
export const wrapRootElement = wrapWithProvider

export const onServiceWorkerUpdateReady = () => {
    document.getElementById('___gatsby').setAttribute('data-update-available', 'true');
};

export const wrapPageElement = ({ element, props }) => {
    return <ThemeProvider>
        <Layout {...props}>{element}</Layout>
    </ThemeProvider>
}

export const registerServiceWorker = () => true