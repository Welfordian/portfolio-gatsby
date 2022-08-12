import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Layout from "../components/Layout";
import Experiments from "../components/Home/Experiments";

const IndexPage = () => (
    <Layout>
        <CaseStudies />

        <PersonalProjects />
        
        <Experiments />
    </Layout>
)

export default IndexPage
