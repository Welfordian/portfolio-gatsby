import React from "react";
import {Link} from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: ''
        }
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.pathname === this.props.location.pathname) return;

        this.setPage(this.props.location.pathname);
    }

    componentDidMount() {
        this.setPage(this.props.location.pathname);
    }

    setPage(path) {
        this.setState({
            page: path.split('/')[1]
        })
    }

    render () {
        return (
            <nav className="flex items-center justify-center justify-between flex-wrap p-3 px-8 mt-8 w-full">
                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0 gap-1">
                    <Link 
                        to="/"
                        className={`${this.state.page.length === 0 ? 'bg-gradient-to-tr from-black/70 via-black/80 to-black text-white border-black shadow-md shadow-black/40' : 'text-gray-500'} hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/music"
                        className={`${this.state.page === 'music' ? 'bg-gradient-to-tr from-black/70 via-black/80 to-black text-white border-black shadow-md shadow-black/40' : 'text-gray-500'} hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}
                    >
                        Music
                    </Link>
                    <Link 
                        to="/resources"
                        className={`${this.state.page === 'resources' ? 'bg-gradient-to-tr from-black/70 via-black/80 to-black text-white border-black shadow-md shadow-black/40' : 'text-gray-500'} hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}
                    >
                        Resources
                    </Link>
                    <a 
                        target="_blank"
                        rel="noopener"
                        href="https://resources.josh.workers.dev/resume" 
                        className="hover:shadow-md hover:shadow-black/40 block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300"
                    >
                        Resume
                    </a>
                    <Link 
                        to="/blog"
                        className={`${this.state.page === 'blog' ? 'bg-gradient-to-tr from-black/70 via-black/80 to-black text-white border-black shadow-md shadow-black/40' : 'text-gray-500'} hover:shadow-md hover:shadow-black/40 block lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}
                    >
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
                        <a href={`https://link.welford.me/twitter`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:shadow-md hover:shadow-black/40 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
                            <div className={`relative`}>
                                <FontAwesomeIcon className={`text-xl`} icon={faTwitter} />
                            </div>
                        </a>
                        <a href={`https://link.welford.me/github`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:shadow-md hover:shadow-black/40 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
                            <div className={`relative`}>
                                <FontAwesomeIcon className={`text-xl`} icon={faGithub} />
                            </div>
                        </a>

                        <a href={`https://link.welford.me/linkedin`} target={`_blank`} rel={`noopener`} className={`block text-gray-500 lg:inline-block lg:mt-0 hover:shadow-md hover:shadow-black/40 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300`}>
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