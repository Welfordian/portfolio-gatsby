import React from "react";
import Marquee from "react-fast-marquee";
import DetectableOverflow from 'react-detectable-overflow';

export default class Track extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isOverflowed: false,
            playMarquee: true,
        }
    }
    
    render () {
        return (
            <a target="_blank" rel="noopener" href={this.props.track.url} onMouseEnter={() => this.setState({playMarquee: false})} onMouseLeave={() => this.setState({playMarquee: true})}>
                <div className="flex flex-col justify-between bg-black text-white p-8">
                    <div className="flex flex-col">
                            {
                                this.state.isOverflowed
                                ?
                                    <Marquee className="font-bold text-xl mb-8 bg-black" gradient={false} speed={50} play={this.state.playMarquee}>{this.props.track.name}</Marquee>
                                :
                                    <DetectableOverflow onChange={isOverflowed => this.setState({ isOverflowed })}>
                                        <p className="font-bold text-xl mb-8 bg-black">{this.props.track.name}</p>
                                    </DetectableOverflow>
                            }
                        
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