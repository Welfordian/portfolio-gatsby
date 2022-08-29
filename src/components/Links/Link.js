import * as React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Link extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank">
                <div className={`dark:text-gray-300 dark:hover:shadow-gray-800 dark:hover:border-gray-800 dark:from-gray-500 dark:via-gray-600 dark:to-gray-700 hover:rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 transition duration-300 text-white bg-gradient-to-tr hover:bg-gradient-to-b from-black/70 via-black/90 to-black flex flex-col justify-between border-4 border-black px-8 py-5`}>
                    <div>
                        <div className="font-bold text-2xl flex justify-between">
                            <div className="flex items-center">
                                { this.props.icon }
                                <span className="ml-3">
                                    { this.props.children }
                                </span>
                            </div>
                            <span>
                                <FontAwesomeIcon icon={faLink}  />
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}