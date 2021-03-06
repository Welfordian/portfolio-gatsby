import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Layout from "../components/Layout";

const IndexPage = () => (
    <Layout>
        <CaseStudies />

        <PersonalProjects />
    </Layout>
)

export default IndexPage
