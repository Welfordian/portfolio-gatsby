import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faInfoCircle, faPlus, faSync, faTimes} from "@fortawesome/pro-light-svg-icons";
import Twitter from "../components/Browser/Twitter";
import Facebook from "../components/Browser/Facebook";
import NewTab from "../components/Browser/NewTab";
import NameNotResolved from "../components/Browser/NameNotResolved";
import {faExternalLink} from "@fortawesome/pro-solid-svg-icons";

class Browser extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sites: [
                NewTab,
                NameNotResolved,
                Twitter,
                Facebook
            ],
            tabs: [
                {url: '', historyIndex: 0, history: [''], component: NewTab}
            ],
            urlActive: false,
            activeTab: 0,
            canGoBack: true,
            canGoForward: true,
        }
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', function(e) {
            if (e.detail > 1) {
                let path = e.path || (e.nativeEvent.composedPath && e.nativeEvent.composedPath());

                let isUiElement = path.filter(el => {
                    if (el.classList) {
                        return el.classList.contains('ui-element');
                    }

                    return false;
                }).length > 0;
                
                if (isUiElement) e.preventDefault();
            }
        }, false);
    }

    goTo(url, updateUrl = false, pushHistory = true) {
        let tabs = this.state.tabs;
        
        let site = this.state.sites.filter(site => {
            site = new site()
            
            return site.aliases.includes(url);
        });
        
        if (site.length === 0) {
            tabs[this.state.activeTab].component = NameNotResolved;
        } else {
            tabs[this.state.activeTab].component = site[0];
        }

        url = 'mainUrl' in (new tabs[this.state.activeTab].component) ? (new tabs[this.state.activeTab].component).mainUrl : url;
        tabs[this.state.activeTab].url = url;
        
        
        if (pushHistory) {
            this.pushHistory(this.state.activeTab, url);
        }
        
        this.setState({
            tabs,
            urlActive: false,
        })
    }
    
    updateUrl(e) {
        let tabs = this.state.tabs;
        
        tabs[this.state.activeTab].url = e.target.value;
        
        this.setState({
            tabs
        })
    }
    
    historyBack() {
        let tabs = this.state.tabs;
        let tab = tabs[this.state.activeTab];
        
        if (tab.historyIndex === 0) {
            return;
        }
        
        tab.historyIndex = tab.historyIndex - 1;
        
        tab.url = tab.history[tab.historyIndex];
        
        tabs[this.state.activeTab] = tab;
        
        this.setState({
            tabs,
        }, () => {
            this.goTo(tab.url, false, false);
        })
    }
    
    historyForward() {
        let tabs = this.state.tabs;
        let tab = tabs[this.state.activeTab];

        if (tab.historyIndex === (tab.history.length - 1)) {
            return;
        }

        tab.historyIndex = tab.historyIndex + 1;

        tab.url = tab.history[tab.historyIndex];

        tabs[this.state.activeTab] = tab;

        this.setState({
            tabs,
        }, () => {
            this.goTo(tab.url, false, false);
        })
    }
    
    pushHistory(_tab, url) {
        let tabs = this.state.tabs;
        let tab = tabs[_tab];
        
        if (! ('history' in tab)) {
            tab['history'] = [];
        }
        
        tab['history'].push(url);
        tab['historyIndex'] = tab['historyIndex'] + 1;
        
        tabs[_tab] = tab;
        
        this.setState({
            tabs,
        })
    }
    
    addTab() {
        let tabs = this.state.tabs;
        
        tabs.push({url: '', historyIndex: 0, history: [''], component: NewTab})
        
        this.setState({
            tabs,
            activeTab: this.state.tabs.length - 1
        })
    }
    
    removeTab(index) {
        let activeTab = this.state.activeTab;
        let tabs = this.state.tabs;

        tabs.splice(index, 1);
        
        activeTab = activeTab - 1;

        if (tabs.length === 0) {
            activeTab = 0
            tabs.push({url: '', component: NewTab})
        }
        
        this.setState({
            activeTab,
            tabs
        })
    }
    
    focusOrRemove(index, oldIndex, e) {
        let path = e.nativeEvent.path || (e.nativeEvent.composedPath && e.nativeEvent.composedPath());
        
        let isClosing = path.filter(el => {
            if (el.classList) {
                return el.classList.contains('close-tab');
            }
            
            return false;
        }).length > 0;
        
        if (isClosing) {
            return this.removeTab(index);
        }
        
        this.setState({ activeTab: index })
    }
    
    render() {
        let Component = this.state.tabs[this.state.activeTab].component;
        
        return (
            <div>
                <div className={`flex justify-center mr-12 select-none`}>
                    <div className={`flex flex-col w-full md:w-4/5 items-end`}>
                        <a className={`bg-gray-300 px-6 py-2 rounded-t-lg hover:bg-gray-400/60 transition-colors`} href={`https://github.com/Welfordian/portfolio-gatsby/blob/main/src/pages/browser.js`} target="_blank" rel="noopener">
                            <FontAwesomeIcon className={`mr-3`} icon={faExternalLink}></FontAwesomeIcon>

                            Source
                        </a>
                    </div>
                </div>
                
                <Tabs onSelect={(index, oldIndex, e) => this.focusOrRemove(index, oldIndex, e)}>
                    <div className={`flex justify-center grow`}>
                        <div className={`h-[42rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-800 w-full md:w-[80em]`}>
                            <div className="ui-element select-none flex items-center justify-between h-12 px-2 rounded-t-lg bg-gray-300 border-gray-500 text-center text-black">
                                <div className="flex items-center h-12 px-2 rounded-t-lg bg-gray-300 border-gray-500 text-center text-black">
                                    <div className={`flex`}>
                                        <div className="flex ml-2 justify-center items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
                                        <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
                                        <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
                                    </div>

                                    <TabList className={`flex ml-4 items-end h-12 max-w-[17em] md:max-w-[70em] overflow-y-auto`}>
                                        {
                                            this.state.tabs.map((tab, index) => {
                                                return <Tab className={`${this.state.activeTab === index ? 'bg-gray-200' : 'hover:bg-gray-200/40'} rounded-t-md transition-colors duration-200 h-10 flex items-center justify-between min-w-[15em] px-3 cursor-pointer`}>
                                                    <p className={`flex items-center`}>
                                                        <img className={`w-5 h-5 mr-2`} src={(new tab.component).icon} />
                                                        { (new tab.component).title }
                                                    </p>

                                                    <FontAwesomeIcon className={`hover:bg-gray-400/50 px-2 py-1 rounded transition-colors duration-200 close-tab`} icon={faTimes} />
                                                </Tab>
                                            })
                                        }
                                    </TabList>
                                </div>

                                <div className={`h-12 flex items-center px-2`}>
                                    <div className={`hover:bg-gray-400/50 px-3 py-1 rounded transition-colors duration-200 cursor-pointer`} onClick={() => this.addTab()}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`w-full bg-gray-200 h-10 flex ui-element`}>
                                <div className={`flex h-10 items-center px-2 gap-2`}>
                                    <FontAwesomeIcon onClick={() => { this.historyBack() }} className={`${this.state.canGoBack ? 'hover:bg-gray-400/50' : 'text-gray-400'} ui-element px-2 py-1 rounded transition-colors duration-200`} icon={faArrowLeft} size={'lg'} />
                                    <FontAwesomeIcon onClick={() => { this.historyForward() }} className={`${this.state.canGoForward ? 'hover:bg-gray-400/50' : 'text-gray-400'} ui-element px-2 py-1 rounded transition-colors duration-200`} icon={faArrowRight} size={'lg'} />
                                    <FontAwesomeIcon className={`ui-element hover:bg-gray-400/50 px-2 py-1 transition-colors rounded`} icon={faSync} size={'lg'} />
                                </div>
                                
                                <div className={`relative w-full h-10 pr-1`}>
                                    <div className={`h-6 top-[1px] absolute flex items-center mt-2 hover:bg-gray-400/50 text-gray-500 w-8 ml-1 px-2 transition-colors duration-200 rounded`}>
                                        <FontAwesomeIcon icon={faInfoCircle} className={`absolute block`} />
                                    </div>
                                    
                                      <input readOnly={!this.state.urlActive} onClick={e => this.setState({urlActive: true})} onFocus={e => this.setState({urlActive: true})} onBlur={e => this.setState({ urlActive: false})} autoComplete={`off`} list="emptyList" onKeyUp={e => e.key === 'Enter' && this.goTo(e.target.value) && e.target.blur()} onChange={e => this.updateUrl(e)} value={this.state.tabs[this.state.activeTab].url} type={`text`} className={`w-full h-8 mt-1 mb-3 rounded outline-none pr-2 pl-10`} />
                                </div>
                            </div>
                            
                            <div className={`relative grow flex bg-black overflow-y-scroll rounded-b-lg`}>
                                {
                                    this.state.tabs.map((tab, index) => {
                                        return <TabPanel forceRender={true} className={`${this.state.activeTab === index ? '' : 'hidden'} w-full grow flex`}>
                                            <div className={`w-full grow bg-white overflow-auto flex`}>
                                                <Component
                                                    url={this.state.tabs[this.state.activeTab].url}
                                                    onNavigate={url => { this.goTo(url, true) }}
                                                ></Component>
                                            </div>
                                        </TabPanel>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default Browser