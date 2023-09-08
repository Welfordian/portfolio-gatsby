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
                    <h1 
                        className="pretty-font text-transparent text-9xl bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700"
                    >
                        JW
                    </h1>
                </div>}
            </div>
        );
    }
}

export default SocialLinks