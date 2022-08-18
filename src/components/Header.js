import React from "react";
import { isLoggedIn, logout } from "../services/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";

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
            page: ('/' + path.split('/')[1])
        })
    }

    render () {
        return (
            <nav className="flex items-center justify-center justify-between flex-wrap p-3 px-8 mt-8 w-full">
                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0 gap-1">
                    <NavItem to="/" page={this.state.page}>Home</NavItem>
                    <NavItem to="/music" page={this.state.page}>Music</NavItem>
                    <NavItem to="/resources" page={this.state.page}>Resources</NavItem>
                    <NavItem to="https://resources.josh.workers.dev/resume" external={true} page={this.state.page}>Resume</NavItem>
                    <NavItem to="/blog" page={this.state.page}>Blog</NavItem>
                    {
                        isLoggedIn()
                            ?
                            <>
                                <NavItem to="/dashboard/" page={this.state.page}>Dashboard</NavItem>
                                <NavItem to="/blog" page={this.state.page} onClick={() => { logout() }}>Logout</NavItem>
                            </> : <></>
                    }
                </div>
                
                <div className="flex flex-wrap justify-center items-center self-end w-full md:w-auto items-center mt-4 md:mt-0">
                    <div className="flex justify-center font-bold">
                        <NavItem to={'https://link.welford.me/twitter'} external={true}>
                            <FontAwesomeIcon className={`text-xl`} icon={faTwitter} />
                        </NavItem>
                        
                        <NavItem to={`https://link.welford.me/github`} external={true}>
                            <FontAwesomeIcon className={`text-xl`} icon={faGithub} />
                        </NavItem>
                        
                        <NavItem to={`https://link.welford.me/linkedin`} external={true}>
                            <FontAwesomeIcon className={`text-xl`} icon={faLinkedin} />
                        </NavItem>
                    </div>
                </div>
            </nav>
        );
    }
}