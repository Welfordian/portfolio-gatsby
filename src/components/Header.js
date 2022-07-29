import React from "react";
import {Link} from "gatsby";

export default class Header extends React.Component {
    render () {
        return (
            <nav className="flex items-center justify-center justify-between flex-wrap p-3 px-8 mt-8">
                <div className="flex flex-col items-center justify-center mr-6 w-full md:w-auto">
                    <p className="text-xl tracking-tight text-center">Josh Welford</p>
                </div>
                <div className="w-full block flex-grow flex items-center justify-center md:justify-none lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    </div>
                    <div className="flex items-center">
                        <Link to="/"
                              className="block text-gray-500 mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-bold">
                            Home
                        </Link>
                        <Link to="/music"
                              className="ml-8 block text-gray-500 mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-bold relative">
                            Music
                        </Link>
                        <Link to="/resources"
                              className="ml-8 block text-gray-500 mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-bold relative">
                            Resources
                        </Link>
                        <Link target="_blank" rel="noopener" to="https://resources.josh.workers.dev/resume"
                              className="ml-8 block text-gray-500 mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-bold relative">
                            Resume
                        </Link>
                        <Link to="/blog"
                              className="ml-8 block text-gray-500 mt-4 lg:inline-block lg:mt-0 hover:text-black font-bold relative">
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}