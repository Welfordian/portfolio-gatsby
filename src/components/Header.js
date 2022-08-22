import React from "react";
import { isLoggedIn, logout } from "../services/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";
import {faBars, faTimes} from "@fortawesome/pro-solid-svg-icons";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: '',
            isMobile: false,
            navOpen: true,
        }
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.pathname === this.props.location.pathname) return;

        this.setPage(this.props.location.pathname);
    }

    componentDidMount() {
        this.setPage(this.props.location.pathname);
        
        this.setState({
            isMobile: document.body.clientWidth <= 768,
            navOpen: document.body.clientWidth >= 768,
        })
        
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: document.body.clientWidth <= 768,
                navOpen: document.body.clientWidth >= 768,
            })
        })
    }

    setPage(path) {
        this.setState({
            page: ('/' + path.split('/')[1])
        })
    }
    
    toggleNav() {
        this.setState({ navOpen: ! this.state.navOpen })
    }
    
    closeNav() {
        if (this.state.isMobile) {
            this.setState({ navOpen: false })
        }
    }

    render () {
        return (
            <>
                <div className={`flex justify-center mt-8 md:hidden dark:text-gray-300`}>
                    <FontAwesomeIcon icon={faBars} size={`2x`} onClick={() => { this.toggleNav() }}></FontAwesomeIcon>
                </div>

                {
                    (this.state.navOpen) ?
                        <nav className="h-full w-full md:h-auto fixed left-0 top-0 z-50">                            
                            <div className={`flex flex-col flex-col-reverse md:flex-row flex-wrap justify-between items-center self-end w-full md:w-auto items-center md:mt-0 gap-1 bg-black p-2 shadow-md shadow-black/70 h-screen md:h-auto`}>
                                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center self-end w-full md:w-auto items-center md:mt-0 gap-1 bg-black p-2 shadow-md shadow-black/70">
                                    <NavItem to="/" page={this.state.page} onClick={() => this.closeNav()}>Home</NavItem>
                                    <NavItem to="/music" page={this.state.page} onClick={() => this.closeNav()}>Music</NavItem>
                                    <NavItem to="/resources" page={this.state.page} onClick={() => this.closeNav()}>Resources</NavItem>
                                    <NavItem to="https://resources.josh.workers.dev/resume" external={true} page={this.state.page} onClick={() => this.closeNav()}>Resume</NavItem>
                                    <NavItem to="/blog" page={this.state.page} onClick={() => this.closeNav()}>Blog</NavItem>
                                    {
                                        isLoggedIn()
                                            ?
                                            <>
                                                <NavItem to="/dashboard/" page={this.state.page} onClick={() => this.closeNav()}>Dashboard</NavItem>
                                                <NavItem to="/blog" page={this.state.page} onClick={() => { logout() }}>Logout</NavItem>
                                            </> : <></>
                                    }
                                </div>

                                <div className="flex flex-col flex-wrap justify-center items-center self-end w-full md:w-auto items-center md:mt-0 gap-1 bg-black p-2 shadow-md shadow-black/70">
                                    <div className={`mt-4 text-white md:hidden`}>
                                        <FontAwesomeIcon icon={faTimes} size={`2x`} onClick={() => { this.toggleNav() }}></FontAwesomeIcon>
                                    </div>
                                    
                                    <div className="flex justify-center font-bold">
                                        <NavItem to={'https://link.welford.me/twitter'} external={true} >
                                            <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faTwitter} onClick={() => this.closeNav()} />
                                        </NavItem>

                                        <NavItem to={`https://link.welford.me/github`} external={true} >
                                            <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faGithub} onClick={() => this.closeNav()} />
                                        </NavItem>

                                        <NavItem to={`https://link.welford.me/linkedin`} external={true} >
                                            <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faLinkedin} onClick={() => this.closeNav()} />
                                        </NavItem>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    : <></>    
                }
            </>
        );
    }
}