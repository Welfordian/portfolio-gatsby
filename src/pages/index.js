import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Experiments from "../components/Home/Experiments";
import SocialLinks from "../components/SocialLinks";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.title = 'New Tab'

        this.icon = 'https://assets.msn.com/statics/icons/favicon_newtabpage.png'

        this.aliases = [
            'jw://home',
        ]
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
