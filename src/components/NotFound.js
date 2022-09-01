import React from 'react';
import {Link} from "gatsby";
import NavItem from "./NavItem";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="py-24 flex-col flex justify-center items-center mt-32">
                <h1 className="text-3xl md:text-5xl text-center">Looks like you're lost.</h1>
                
                <p className={`pt-12 text-center`}>It happens to the best of us. Here's some useful links.</p>

                <div className="flex flex-wrap justify-center mt-12 gap-3">
                    <NavItem to="/" bordered large>Home</NavItem>
                    <NavItem to="/music" bordered large>Music</NavItem>
                    <NavItem to="/resources" bordered large>Resources</NavItem>
                    <NavItem to="https://resources.josh.workers.dev/resume" external={true} bordered large>Resume</NavItem>
                    <NavItem to="/blog" bordered large>Blog</NavItem>
                </div>
            </div>
        );
    }
}