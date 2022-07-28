import * as React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Link extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank">
                <div className={`flex flex-col justify-between border-4 border-black px-8 py-4 transition-all hover:bg-black hover:text-white hover:fill-white ${this.props.className}`}>
                    <div>
                        <div className="font-bold text-2xl flex justify-between">
                            <div className="flex items-center">
                                { this.props.icon }
                                <span className="ml-3">
                                    { this.props.children }
                                </span>
                            </div>
                            <span>
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}