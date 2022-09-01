import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Experiments from "../components/Home/Experiments";
import SocialLinks from "../components/SocialLinks";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SocialLinks />

                <CaseStudies />

                <PersonalProjects />

                <Experiments />
            </>
        );
    }
}

export default IndexPage
