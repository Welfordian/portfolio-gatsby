import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync} from "@fortawesome/pro-solid-svg-icons";

const isBrowser = typeof window !== "undefined"

class AppUpdateAvailable extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: isBrowser && document.querySelectorAll('[data-update-available]').length,
        }
        
        if (isBrowser) {
            let waitForUpdate = setInterval(() => {
                if (document.querySelectorAll('[data-update-available]').length) {
                    this.setState({
                        open: true,
                    })
                }
            }, 1000)
            
            setTimeout(() => {
                clearTimeout(waitForUpdate);
            }, 15000)
        }
    }

    render() {
        if (! this.state.open) return (<div className={`absolute`}></div>);
        
        return (
            <div className="fixed bottom-0 w-full md:w-2/4 lg:w-1/4 right-0 md:ml-0 md:mr-4 p-4 md:mb-4 bg-opacity-90 bg-gray-700 shadow shadow-current shadow-md" role="alert">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium text-white">An update is available</h3>
                </div>
                <div className="mt-2 mb-4 text-sm text-white">
                    This application has been updated. Refresh the page to apply the changes.
                </div>
                <div className="flex">
                    <button 
                        onClick={() => window.location.reload(true)}
                        type="button" 
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-black font-medium text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
                    >
                        <FontAwesomeIcon className={`mr-2`} icon={faSync}></FontAwesomeIcon>
                        
                        Refresh Now
                    </button>
                    <button 
                        onClick={() => this.setState({ open: false })}
                        type="button"
                        className="text-white bg-transparent border border-gray-800 hover:bg-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium text-xs px-3 py-1.5 text-center border-black hover:text-white" 
                        aria-label="Close"
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        );
    }
}

export default AppUpdateAvailable