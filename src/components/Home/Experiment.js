import React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Experiment extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank" className={`dark:text-gray-300 dark:hover:shadow-gray-800 dark:hover:border-gray-800 dark:from-gray-500 dark:via-gray-600 dark:to-gray-700 hover:rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 transition duration-300 text-white bg-gradient-to-tr hover:bg-gradient-to-b from-black/70 via-black/90 to-black grow flex flex-col justify-between border-4 border-black p-8`}>
                <div className={`grow flex`}>
                    <div className={`flex flex-col items-between justify-between`}>
                        <div>
                            <p className="font-bold text-2xl mb-8 flex justify-between">
                                <span>{this.props.title}</span>
                                <span>
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                            </p>

                            <p className="mt-2">
                                {this.props.description}
                            </p>
                        </div>

                        <p className="dark:text-gray-300 mt-3 font-semibold text-gray-500">{this.props.tag}</p>
                    </div>
                </div>
            </a>
        )
    }
}