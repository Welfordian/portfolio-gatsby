import React from 'react';
import Layout from "../components/Layout";
import App from "../components/Naturalization/app";

class Naturalization extends React.Component {
    render() {
        return (
            <Layout hideSocial hideTagline marginTop={`mt-6`}>
                <App></App>
            </Layout>
        );
    }
}

export default Naturalization