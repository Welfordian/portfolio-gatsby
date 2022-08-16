import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faShare} from "@fortawesome/free-solid-svg-icons";
import Tagline from "./Tagline";

class SocialLinks extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center mx-4 px-4">
                {this.props.hideTagline ? '' : <div className={`flex flex-col items-center justify-center`}>
                    <h1 className="text-3xl md:text-4xl text-center">Joshua Welford</h1>
                    <p className="mt-4">Software Engineer</p>

                    <Tagline />
                </div>}
            </div>
        );
    }
}

export default SocialLinks