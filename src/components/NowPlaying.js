import React from 'react';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import {Levels} from "react-activity";
import Marquee from "react-fast-marquee";
import DetectableOverflow from "react-detectable-overflow";
import {faTimes} from "@fortawesome/pro-light-svg-icons";

class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            track: null,
            isClosed: false,
            isOverflowed: false,
        }
    }

    componentDidMount() {
        this.loadTrack();
    }
    
    loadTrackTimeout(ms = 5000) {
        setTimeout(() => { this.loadTrack() }, ms);
    }
    
    loadTrack() {
        axios.get('https://api.welford.me/spotify/now').then((r) => {
            this.setState({
                track: r.data,
                isOverflowed: false,
            })
            
            if (r.data.is_playing) {
                this.loadTrackTimeout()
            } else {
                this.loadTrackTimeout();
            }
        }).catch(() => {
            this.loadTrackTimeout(5000);
        });
    }
    
    close(e) {
        e.preventDefault();
        
        this.setState({
            isClosed: true
        })
    }
    
    render() {
        if (this.state.isClosed || this.state.track === null || this.state.track.length === 0) return (<div></div>)
        
        let image = this.state.track.item.album.images[0];
        
        return (
            <div className={`w-full md:w-auto fixed bottom-0 left-0 self-center flex w-full justify-center md:justify-start z-0`}>
                <div className={`bg-black/80 px-4 py-3 mb-3 ml-3 mr-3 shadow-md shadow-gray-900`}>
                    <a href={this.state.track.item.external_urls.spotify} target={`_blank`} rel={`noopener`}>
                        <div className="flex items-end w-full relative">
                            <FontAwesomeIcon onClick={e => this.close(e)} className={`absolute -top-3 -right-4 text-white px-2 py-1`} icon={faTimes} />
                            
                            <div className="inline-flex items-center w-full">
                                <Levels size={20} color={`white`} className={`mr-4`}></Levels>

                                <div className={`flex items-center gap-3`}>
                                    <img className="w-16 self-center" src={image.url} />

                                    <div className="text-white max-w-full flex flex-col justify-between">
                                        <div className={`max-w-xs`}>
                                            {
                                                this.state.isOverflowed
                                                    ?
                                                    <Marquee className={`max-w-xs`} gradient={false} speed={30} play={this.state.playMarquee}>{this.state.track.item.name}</Marquee>
                                                    :
                                                    <DetectableOverflow onChange={isOverflowed => this.setState({ isOverflowed })}>
                                                        <p className="break-words">{this.state.track.item.name}</p>
                                                    </DetectableOverflow>
                                            }
                                        </div>
                                        <p>{this.state.track.item.artists[0]['name']}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default NowPlaying