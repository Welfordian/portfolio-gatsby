import React from "react";
import {Link} from "gatsby";
import { isLoggedIn, logout } from "../services/auth";

export default class Header extends React.Component {
    render () {
        return (
            <nav className="flex items-center justify-center justify-between flex-wrap p-3 px-8 mt-8">
                <div className="flex flex-col items-center justify-center mr-6 w-full md:w-auto">
                    <p className="text-xl tracking-tight text-center">
                        <Link to="/">Josh Welford</Link>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0">
                    <Link to="/"
                          className="mr-5 block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Home
                    </Link>
                    <Link to="/music"
                          className="mr-5 block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Music
                    </Link>
                    <Link to="/resources"
                          className="mr-5 block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
                        Resources
                    </Link>
                    <a target="_blank" rel="noopener" href="https://resources.josh.workers.dev/resume"
                       className="mr-5 block text-gray-500 lg:inline-block lg:mt-0 hover:text-white hover:border-black hover:bg-black hover:text-white px-3 py-2 font-bold border-4 border-white transition duration-300">
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
            </nav>
        );
    }
}