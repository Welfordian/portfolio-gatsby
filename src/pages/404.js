import * as React from "react"
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <Layout>
                <NotFound />
            </Layout>
        );
    }
}
