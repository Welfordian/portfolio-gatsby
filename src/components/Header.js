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
            navOpen: false,
        }
        
        this.links = React.createRef();
        this.socials = React.createRef();
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
            }, () => {
                if (! this.state.isMobile) {
                    document.querySelector('body').classList.remove('overflow-hidden');
                }
            })
        })
        
        window.addEventListener('scroll', e => {
            const scrollY = window.scrollY;

            if (scrollY >= 40) {
                this.links.current?.classList.add('drop-shadow-[0_8px_5px_rgba(0,0,0,0.10)]');
                this.socials.current?.classList.add('drop-shadow-[0_8px_5px_rgba(0,0,0,0.10)]');
            } else {
                this.links.current?.classList.remove('drop-shadow-[0_8px_5px_rgba(0,0,0,0.10)]');
                this.socials.current?.classList.remove('drop-shadow-[0_8px_5px_rgba(0,0,0,0.10)]');
            }
        })
    }

    setPage(path) {
        this.setState({
            page: ('/' + path.split('/')[1])
        })
    }
    
    toggleNav() {
        let isOpen = ! this.state.navOpen;
        
        if (this.state.isMobile && isOpen) {
            document.querySelector('body').classList.add('overflow-hidden');
        } else {
            document.querySelector('body').classList.remove('overflow-hidden');
        }
        
        this.setState({ navOpen: isOpen })
    }
    
    closeNav() {
        if (this.state.isMobile) {
            this.setState({ navOpen: false })
        }
    }
    
    mobileClass() {
        if (! this.state.isMobile) return "w-auto";
        if (! this.state.navOpen) return "w-0 overflow-hidden";
        
        return "!w-full h-screen";
    }

    render () {
        return (
            <div className={`overflow-hidden flex flex-col md:flex-row mt-0 ml-0 md:ml-4 justify-between fixed md:mt-8 container mx-4 md:p-4 z-50 pointer-events-none`}>
                {
                    this.state.isMobile 
                    ? 
                        <div className={`${this.state.navOpen ? 'dark:bg-black dark:text-white bg-white w-full' : 'w-8'} transition-all md:hidden pointer-events-auto p-2 flex items-center justify-between dark:text-white`} onClick={() => this.toggleNav()}>
                            {
                                this.state.navOpen
                                ?
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                    ></FontAwesomeIcon>
                                :
                                    <FontAwesomeIcon
                                        icon={faBars}
                                    ></FontAwesomeIcon>    
                            }

                            {
                                this.state.navOpen
                                ?
                                    <p className={`justify-self-center`}>Joshua Welford</p>
                                : <></>    
                            }
                        </div>
                    : ""
                }
                
                <div 
                    ref={this.links}
                    className={`${this.mobileClass()} w-0 pointer-events-auto flex flex-col md:flex-row flex-wrap items-center w-full md:w-auto items-center md:mt-0 gap-1 md:p-2 bg-white dark:bg-black transition-all z-40`}
                >
                    <NavItem to="/" page={this.state.page} onClick={() => this.toggleNav()}>Home</NavItem>
                    <NavItem to="/music" page={this.state.page} onClick={() => this.toggleNav()}>Music</NavItem>
                    <NavItem to="/resources" page={this.state.page} onClick={() => this.toggleNav()}>Resources</NavItem>
                    <NavItem to="https://resources.josh.workers.dev/resume" external={true} page={this.state.page} onClick={() => this.toggleNav()}>Resume</NavItem>
                    <NavItem to="/blog" page={this.state.page} onClick={() => this.toggleNav()}>Blog</NavItem>
                    {
                        isLoggedIn()
                            ?
                            <>
                                <NavItem to="/dashboard/" page={this.state.page} onClick={() => this.toggleNav()}>Dashboard</NavItem>
                                <NavItem to="/blog" page={this.state.page} onClick={() => { logout() }}>Logout</NavItem>
                            </> : <></>
                    }

                    {
                        this.state.isMobile
                        ?
                            <div className={`flex mt-4`}>
                                <NavItem to={'https://link.welford.me/twitter'} external={true} >
                                    <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faTwitter} onClick={() => this.toggleNav()} />
                                </NavItem>

                                <NavItem to={`https://link.welford.me/github`} external={true} >
                                    <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faGithub} onClick={() => this.toggleNav()} />
                                </NavItem>

                                <NavItem to={`https://link.welford.me/linkedin`} external={true} >
                                    <FontAwesomeIcon className={`text-xl`} size={'sm'} icon={faLinkedin} onClick={() => this.toggleNav()} />
                                </NavItem>
                            </div>
                        :
                            <></>    
                    }
                </div>

                <div 
                    ref={this.socials}
                    className={`${this.mobileClass()} w-0 pointer-events-auto flex flex-col flex-wrap items-center md:w-auto items-center md:mt-0 gap-1 p-2 bg-white dark:bg-black md:mr-8 transition-all z-50`}
                >
                    <div className="flex justify-center font-bold">
                        <NavItem to={'https://link.welford.me/twitter'} external={true} >
                            <FontAwesomeIcon className={`text-xl h-5`} size={'sm'} icon={faTwitter} onClick={() => this.toggleNav()} />
                        </NavItem>

                        <NavItem to={`https://link.welford.me/github`} external={true} >
                            <FontAwesomeIcon className={`text-xl h-5`} size={'sm'} icon={faGithub} onClick={() => this.toggleNav()} />
                        </NavItem>

                        <NavItem to={`https://link.welford.me/linkedin`} external={true} >
                            <FontAwesomeIcon className={`text-xl h-5`} size={'sm'} icon={faLinkedin} onClick={() => this.toggleNav()} />
                        </NavItem>
                    </div>
                </div>
            </div>
        );
    }
}