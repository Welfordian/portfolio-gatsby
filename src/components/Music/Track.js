import React from "react";
import Marquee from "react-fast-marquee";
import DetectableOverflow from 'react-detectable-overflow';
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUserMusic} from "@fortawesome/pro-solid-svg-icons";
import {Levels} from "react-activity";
import {faSpotify, faYoutube} from "@fortawesome/free-brands-svg-icons";

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
            <div className="relative w-full h-[450px] md:w-[450px] mb-5 hover:scale-105 transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 hover:rotate-1 select-none" onMouseEnter={() => this.setState({playMarquee: false})} onMouseLeave={() => this.setState({playMarquee: true})}>
                <div className="flex flex-col justify-between text-white w-full h-[450px] md:w-[450px]" style={{background: `url(${this.props.track.album_image}) no-repeat center center`, backgroundSize: "cover"}}>
                    <div className="font-bold text-xl px-4 py-6 text-center bg-black/[0.6]">
                            {
                                this.state.isOverflowed
                                ?
                                    <Marquee gradient={false} speed={30} play={this.state.playMarquee}>{this.props.track.name}</Marquee>
                                :
                                    <DetectableOverflow onChange={isOverflowed => this.setState({ isOverflowed })}>
                                        <p>{this.props.track.name}</p>
                                    </DetectableOverflow>
                            }
                    </div>
                    
                    <div className="flex justify-center w-auto px-4 py-2">
                        <a target="_blank" rel="noopener" href={this.props.track.spotify_url} className={`relative`}>
                            <div className={`absolute w-14 h-14 rounded-full bg-white top-[2%] left-[3%]`}></div>
                            <FontAwesomeIcon icon={faSpotify} size={`4x`} className={`text-[#1DB954] drop-shadow shadow-red-500 mr-8`}></FontAwesomeIcon>
                        </a>

                        <a target="_blank" rel="noopener" href={this.props.track.youtube_url} className={`relative`}>
                            <div className={`absolute w-5 h-5 bg-white top-[34%] left-[40%]`}></div>
                            <FontAwesomeIcon icon={faYoutube} size={`4x`} className={`text-[#FF0000] drop-shadow shadow-red-500`}></FontAwesomeIcon>
                        </a>
                    </div>
                    
                    <div className="flex flex-col px-4 py-6 bg-black/[0.6]">
                        <p className="font-semibold">
                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                            {this.props.track.artist}
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
            </div>
        );
    }
}