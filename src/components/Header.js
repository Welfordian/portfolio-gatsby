import React from "react";
import {Link} from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default class Header extends React.Component {
    render () {
        return (
            <nav className="flex items-center justify-center justify-between flex-wrap p-3 px-8 mt-8 w-full">
                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0">
                    <Link to="/"
                          className="block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Home
                    </Link>
                    <Link to="/music"
                          className="block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Music
                    </Link>
                    <Link to="/resources"
                          className="block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Resources
                    </Link>
                    <a target="_blank" rel="noopener" href="https://resources.josh.workers.dev/resume"
                       className="block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Resume
                    </a>
                    <Link to="/blog"
                          className="block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Blog
                    </Link>
                    {
                        isLoggedIn()
                            ?
                            <>
                                <Link to="/dashboard/"
                                      className="cursor-pointer ml-10 block text-gray-500 lg:inline-block lg:mt-0 hover:text-black font-bold relative">
                                    Dashboard
                                </Link>

                                <a onClick={() => { logout() }}
                                   className="cursor-pointer ml-10 block text-gray-500 lg:inline-block lg:mt-0 hover:text-black font-bold relative">
                                    Logout
                                </a>
                            </>
                            :
                            <></>
                    }
                </div>
                
                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0">
                    <div className="flex justify-center font-bold">
                        <a href={`https://link.welford.me/twitter`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
                            <div className={`relative`}>
                                <FontAwesomeIcon className={`text-xl`} icon={faTwitter} />
                            </div>
                        </a>
                        <a href={`https://link.welford.me/github`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
                            <div className={`relative`}>
                                <FontAwesomeIcon className={`text-xl`} icon={faGithub} />
                            </div>
                        </a>

                        <a href={`https://link.welford.me/linkedin`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
                            <div className={`relative`}>
                                <FontAwesomeIcon className={`text-xl`} icon={faLinkedin} />
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}