/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/index.css"

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

export const onServiceWorkerUpdateReady = () => {
    document.getElementById('___gatsby').setAttribute('data-update-available', 'true');
    console.info('PWA update available.');
};

export const registerServiceWorker = () => true