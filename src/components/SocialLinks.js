import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faShare} from "@fortawesome/free-solid-svg-icons";
import Tagline from "./Tagline";

class SocialLinks extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center mx-4 px-4">
                <div className={`flex flex-col items-center justify-center`}>
                    <a href="https://www.bbc.com/news/world-europe-60504334" target="_blank" rel="noopener">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png" className="w-36 mb-4" />
                    </a>
                    <h1 className="text-4xl">Joshua Welford</h1>
                    <p className="mt-4">Lead Technical Engineer at EMR4DW</p>
                </div>
                <Tagline />
                <div className="flex justify-center font-bold mt-8">
                    <a href={`https://twitter.com/welfordian`} target={`_blank`} rel={`noopener`}>
                        <div className={`border-4 border-black p-2 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faTwitter} />
                        </div>
                    </a>
                    <a href={`https://github.com/welfordian`} target={`_blank`} rel={`noopener`}>
                        <div className={`border-4 border-black p-2 ml-8 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faGithub} />
                        </div>
                    </a>

                    <a href={`https://linkedin.com/in/welfordian`} target={`_blank`} rel={`noopener`}>
                        <div className={`border-4 border-black p-2 ml-8 relative`}>
                            <div className={`absolute top-0 right-0 -mt-2 -mr-2 px-1 bg-white flex justify-center items-center`}>
                                <FontAwesomeIcon className={`text-1xl`} icon={faShare} />
                            </div>
                            <FontAwesomeIcon className={`text-3xl`} icon={faLinkedin} />
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default SocialLinks