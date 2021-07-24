import * as React from "react"
import loadable from '@loadable/component'

const Layout = loadable(() => import('../components/Layout'));
const CaseStudies = loadable(() => import('../components/Home/CaseStudies'));
const PersonalProjects = loadable(() => import('../components/Home/PersonalProjects'));

const IndexPage = () => (
    <Layout>
        <CaseStudies />

        <PersonalProjects />
    </Layout>
)

export default IndexPage
