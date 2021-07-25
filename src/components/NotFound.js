import React from 'react';
import {Link} from "gatsby";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="py-24 flex-col flex justify-center items-center">
                <h1 className="text-3xl md:text-5xl">What are you looking for?</h1>

                <div className="flex mt-12">
                    <Link to="/"
                          className="border-2 px-8 py-3 border-black hover:bg-black hover:text-white mr-3">Home</Link>
                    <Link to="/music"
                          className="border-2 px-8 py-3 border-black hover:bg-black hover:text-white mr-3">Music</Link>
                    <Link to="/blog"
                          className="border-2 px-8 py-3 border-black hover:bg-black hover:text-white mr-3">Blog</Link>
                </div>
            </div>
        );
    }
}