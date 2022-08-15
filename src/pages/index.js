import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Experiments from "../components/Home/Experiments";
import SocialLinks from "../components/SocialLinks";

const IndexPage = () => (
    <>
        <SocialLinks />
        
        <CaseStudies />

        <PersonalProjects />

        <Experiments />
    </>
)

export default IndexPage
