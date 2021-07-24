import React from "react";

export default class PersonalProject extends React.Component {
    render () {
        return (
            <a href={this.props.to} rel="noopener" target="_blank">
                <div className={`flex flex-col justify-between ${this.props.bordered ? "border-4" : ""} border-black p-8`}>
                    <div>
                        <p className="font-bold text-2xl mb-8 flex justify-between">
                            <span>{this.props.title}</span>
                            <span>
                                <img alt="link icon" loading="lazy" src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png" />
                            </span>
                        </p>
                        <p className="mt-2 text-justify">
                            {this.props.description}
                        </p>
                    </div>
                    <p className="mt-3 font-semibold text-gray-500">{this.props.tag}</p>
                </div>
            </a>
        )
    }
}