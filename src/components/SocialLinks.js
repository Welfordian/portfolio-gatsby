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
                {this.props.hideSocial ? '' : <div className="flex justify-center font-bold mt-8">
                    <a href={`https://link.welford.me/twitter`} target={`_blank`} rel={`noopener`} className={`hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-500 duration-300 hover:rotate-3`}>
                        <div className={`border-4 border-black p-2 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faTwitter} />
                        </div>
                    </a>
                    <a href={`https://link.welford.me/github`} target={`_blank`} rel={`noopener`} className={`hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-500 duration-300 hover:rotate-3 ml-8`}>
                        <div className={`border-4 border-black p-2 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faGithub} />
                        </div>
                    </a>

                    <a href={`https://link.welford.me/linkedin`} target={`_blank`} rel={`noopener`} className={`hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-500 duration-300 hover:rotate-3 ml-8`}>
                        <div className={`border-4 border-black p-2 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faLinkedin} />
                        </div>
                    </a>
                </div>}
            </div>
        );
    }
}

export default SocialLinks