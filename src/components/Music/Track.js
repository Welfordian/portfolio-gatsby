import React from "react";

export default class Track extends React.Component {
    render () {
        return (
            <a target="_blank" rel="noopener" href={this.props.track.url}>
                <div className="flex flex-col justify-between bg-black text-white p-8">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl mb-8">{this.props.track.name}</p>
                        <div className="flex justify-center">
                            <img alt={this.props.track.name}
                                 src={this.props.track.image[3]['#text']}
                                 loading="lazy"
                                 width="300"
                                 height="300" />
                        </div>
                    </div>
                    <p className="mt-3 font-semibold text-gray-500">{this.props.track.artist['#text']}</p>
                    {
                        '@attr' in this.props.track
                            ? <p className="mt-3 font-semibold text-gray-500">Listening Now</p>
                            : <p className="mt-3 font-semibold text-gray-500">{this.props.track.date['#text']}</p>
                    }
                </div>
            </a>
        );
    }
}