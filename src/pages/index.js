import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Experiments from "../components/Home/Experiments";
import SocialLinks from "../components/SocialLinks";
import StayTuned from "../components/StayTuned";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <StayTuned />
            </>
        );
    }
}

export default IndexPage
