import React from "react";
import Marquee from "react-fast-marquee";
import DetectableOverflow from 'react-detectable-overflow';
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUserMusic} from "@fortawesome/pro-solid-svg-icons";
import {Levels} from "react-activity";

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
            <a className="relative w-full h-[450px] md:w-[450px] mb-5 hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 hover:rotate-1" target="_blank" rel="noopener" href={this.props.track.track.external_urls.spotify} onMouseEnter={() => this.setState({playMarquee: false})} onMouseLeave={() => this.setState({playMarquee: true})}>
                <div className="flex flex-col justify-between text-white w-full h-[450px] md:w-[450px]" style={{background: `url(${this.props.track.track.album.images[0]['url']}) no-repeat center center`, backgroundSize: "cover"}}>
                    <div className="font-bold text-xl px-4 py-6 text-center bg-black/[0.6]">
                            {
                                this.state.isOverflowed
                                ?
                                    <Marquee gradient={false} speed={30} play={this.state.playMarquee}>{this.props.track.track.name}</Marquee>
                                :
                                    <DetectableOverflow onChange={isOverflowed => this.setState({ isOverflowed })}>
                                        <p>{this.props.track.track.name}</p>
                                    </DetectableOverflow>
                            }
                    </div>
                    
                    <div className="flex flex-col px-4 py-6 bg-black/[0.6]">
                        <p className="font-semibold">
                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                            {this.props.track.track.artists[0]['name']}
                        </p>
                        {
                            '@attr' in this.props.track
                                ? <p className="mt-3 font-semibold flex items-end">
                                    <Levels className="mr-4" />
                                    Listening Now
                                  </p>
                                : <p className="mt-3 font-semibold">
                                    <FontAwesomeIcon className="mr-4" icon={faClock} />
                                    {moment(this.props.track.played_at).fromNow(true)} ago
                                  </p>
                        }
                    </div>
                </div>
            </a>
        );
    }
}