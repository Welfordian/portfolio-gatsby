import React from 'react';
import Layout from "../components/Layout";
import App from "../components/Naturalization/app";
import {Helmet} from "react-helmet";

class Naturalization extends React.Component {
    render() {
        return (
            <Layout hideSocial hideTagline marginTop={`mt-6`}>
                <App></App>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </Layout>
        );
    }
}

export default Naturalization