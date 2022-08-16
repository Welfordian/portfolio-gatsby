import React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Experiment extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank" className={`hover:rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 hover:bg-white hover:text-black transition duration-300 text-white bg-black grow flex flex-col justify-between border-4 border-black p-8`}>
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

                        <p className="mt-3 font-semibold text-gray-500">{this.props.tag}</p>
                    </div>
                </div>
            </a>
        )
    }
}