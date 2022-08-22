import React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class PersonalProject extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank">
                <div className={`dark:text-gray-300 dark:hover:shadow-gray-800 dark:hover:border-gray-800 hover:-rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 hover:bg-gradient-to-tr from-black/70 via-black/90 to-black hover:text-white hover:border-black transition duration-300 flex-col justify-between ${this.props.bordered ? "border-black dark:border-gray-400" : "border-white dark:border-black"} border-4 p-8`}>
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
                    <p className="mt-3 font-semibold text-gray-500 dark:text-gray-300">{this.props.tag}</p>
                </div>
            </a>
        )
    }
}