import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faInfoCircle, faSync, faTimes} from "@fortawesome/pro-light-svg-icons";

class Browser extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tabs: [{url: 'localhost:8000/browser'}, {url: 'https://twitter.com/home'}],
            activeTab: 0,
            canGoBack: true,
            canGoForward: false,
        }
    }

    render() {
        return (
            <div>
                <Tabs onSelect={index => this.setState({ activeTab: index })}>
                    <div className={`flex justify-center grow`}>
                        <div className={`h-[42rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-800 w-full md:w-4/5`}>
                            <div className="flex items-center h-12 px-2 rounded-t-lg bg-gray-300 border-b border-gray-500 text-center text-black">
                                <div className={`flex`}>
                                    <div className="flex ml-2 justify-center items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
                                    <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
                                    <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
                                </div>

                                <TabList className={`flex ml-4 items-end h-12`}>
                                    <Tab className={`${this.state.activeTab === 0 ? 'bg-gray-200' : 'hover:bg-gray-200/40'} rounded-t-md transition-colors duration-200 h-10 flex items-center justify-between min-w-[15em] px-3 cursor-pointer`}>
                                        <p className={`flex items-center`}>
                                            <img className={`w-5 h-5 mr-2`} src={`http://localhost:8000/favicon-32x32.png?v=4a9773549091c227cd2eb82ccd9c5e3a`} />
                                            Joshua Welford
                                        </p>
                                        
                                        <FontAwesomeIcon className={`hover:bg-gray-400/50 px-2 py-1 rounded transition-colors duration-200`} icon={faTimes} />
                                    </Tab>
                                    <Tab className={`${this.state.activeTab === 1 ? 'bg-gray-200' : 'hover:bg-gray-200/40'} rounded-t-md transition-colors duration-200 h-10 flex items-center justify-between min-w-[15em] px-3 cursor-pointer`}>
                                        <p className={`flex items-center`}>
                                            <img className={`w-5 h-5 mr-2`} src={`https://abs.twimg.com/favicons/twitter.2.ico`} />
                                            Twitter
                                        </p>

                                        <FontAwesomeIcon className={`hover:bg-gray-400/50 px-2 py-1 rounded transition-colors duration-200`} icon={faTimes} />
                                    </Tab>
                                </TabList>
                            </div>
                            
                            <div className={`w-full bg-gray-200 h-10 -mt-[1px] flex`}>
                                <div className={`flex h-10 items-center px-2 gap-2`}>
                                    <FontAwesomeIcon className={`${this.state.canGoBack ? 'hover:bg-gray-400/50' : 'text-gray-400'} px-2 py-1 transition-colors duration-200`} icon={faArrowLeft} size={'lg'} />
                                    <FontAwesomeIcon className={`${this.state.canGoForward ? 'hover:bg-gray-400/50' : 'text-gray-400'} px-2 py-1 transition-colors duration-200`} icon={faArrowRight} size={'lg'} />
                                    <FontAwesomeIcon className={`hover:bg-gray-400/50 px-2 py-1 transition-colors`} icon={faSync} size={'lg'} />
                                </div>
                                
                                <div className={`relative w-full h-10 pr-1`}>
                                    <div className={`h-6 top-[1px] absolute flex items-center mt-2 hover:bg-gray-400/50 text-gray-500 w-8 ml-1 px-2 transition-colors duration-200 rounded`}>
                                        <FontAwesomeIcon icon={faInfoCircle} className={`absolute block`} />
                                    </div>
                                    <input value={this.state.tabs[this.state.activeTab].url} type={`text`} className={`w-full h-8 mt-1 mb-3 rounded outline-none pr-2 pl-10`} />
                                </div>
                            </div>
                            
                            <div className={`relative grow flex bg-black overflow-y-scroll rounded-b-lg`}>
                                <TabPanel className={`${this.state.activeTab === 0 ? '' : 'hidden'} w-full grow flex`}>
                                    <div className={`w-full grow bg-white`}>
                                        <h2>This, theoretically, would be localhost.</h2>
                                    </div>
                                </TabPanel>
                                <TabPanel className={`${this.state.activeTab === 1 ? '' : 'hidden'} w-full grow flex`}>
                                    <div className={`w-full grow bg-white`}>
                                        <h2>This, theoretically, would be Twitter.</h2>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default Browser