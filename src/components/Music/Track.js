import React from "react";
import Marquee from "react-fast-marquee";
import DetectableOverflow from 'react-detectable-overflow';
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faStop, faUserMusic, faPlay} from "@fortawesome/pro-solid-svg-icons";
import { Popover } from 'react-tiny-popover'
import {faSpotify, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default class Track extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOverflowed: false,
            playMarquee: true,
            isPlayingPreview: false,
            previewProgress: 0,
            popoverOpen: false,
        }
        
        this.audioRef = React.createRef();
        
        this.explicit = <div className={`bg-gray-700 shadow-md text-white px-2 py-1`}>Explicit</div>
    }
    
    componentDidMount() {
        this.audioRef.current.onended = () => {
            this.setState({ isPlayingPreview: false, previewProgress: 0 })
        }
        
        this.audioRef.current.onpause = () => {
            this.setState({ isPlayingPreview: false, previewProgress: 0 })
        }
        
        requestAnimationFrame(this.previewProgress.bind(this))
    }

    togglePreview() {
        if (this.state.isPlayingPreview) {
            this.audioRef.current.pause();
            this.audioRef.current.currentTime = 0
            
            this.setState({ isPlayingPreview: false, previewProgress: 0 })
        } else {
            document.querySelectorAll('audio').forEach(audio => audio.pause())
            
            this.audioRef.current.play();
            
            this.setState({ isPlayingPreview: true })
        }
    }
    
    previewProgress() {
        if (this.state.isPlayingPreview) {
            this.setState({
                previewProgress: (this.audioRef.current.currentTime / this.audioRef.current.duration) * 100
            })
        }
        
        requestAnimationFrame(this.previewProgress.bind(this));
    }
    
    render () {
        return (
            <div className="dark:hover:shadow-gray-800 relative w-full h-[340px] md:h-[250px] md:w-[287px] transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 select-none" onMouseEnter={() => this.setState({playMarquee: false})} onMouseLeave={() => this.setState({playMarquee: true})}>
                <div className="flex flex-col justify-between text-white w-full h-[340px] md:h-[250px] md:w-[287px]" style={{background: `url(${this.props.track.album_image}) no-repeat center center`, backgroundSize: "cover"}}>
                    <div className="font-bold text-sm px-4 py-3 text-center bg-black/[0.6] flex">
                        {
                            this.props.track.explicit
                                ?
                                <div className={`bg-gray-700 px-2 mr-2 inline`} title={`Explicit`} onMouseEnter={() => this.setState({popoverOpen: true})} onMouseLeave={() => this.setState({popoverOpen: false})}>
                                    <Popover 
                                        isOpen={this.state.popoverOpen}
                                        content={this.explicit}
                                    >
                                        <p className={`inline p-0 m-0`}>E</p>
                                    </Popover>
                                </div>
                                : <span></span>
                        }
                        
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
                        {
                            this.props.track.preview_url !== null
                            ?
                                <div>
                                    {
                                        this.state.isPlayingPreview
                                        ?
                                            <FontAwesomeIcon onClick={() => { this.togglePreview() }} icon={faStop} size={`2x`} className={`text-white drop-shadow-md mr-8 cursor-pointer`} title={`Stop Preview`}></FontAwesomeIcon>
                                        :
                                            <FontAwesomeIcon onClick={() => { this.togglePreview() }} icon={faPlay} size={`2x`} className={`text-white drop-shadow-md mr-8 cursor-pointer`} title={`Play Preview`}></FontAwesomeIcon>  
                                    }
                                    <audio className={`hidden`} ref={this.audioRef}>
                                        <source src={this.props.track.preview_url} type="audio/mpeg" />
                                    </audio>
                                </div>
                            : <div></div>    
                        }
                        <a target="_blank" rel="noopener" href={this.props.track.spotify_url} className={`relative cursor-pointer`}>
                            <div className={`absolute w-7 h-7 rounded-full bg-white top-[10%] left-[2%]`}></div>
                            <FontAwesomeIcon icon={faSpotify} size={`2x`} className={`text-[#1DB954] drop-shadow-md mr-8`}></FontAwesomeIcon>
                        </a>

                        <a target="_blank" rel="noopener" href={this.props.track.youtube_url} className={`relative cursor-pointer`}>
                            <div className={`absolute w-3 h-3 bg-white top-[32%] left-[40%]`}></div>
                            <FontAwesomeIcon icon={faYoutube} size={`2x`} className={`text-[#FF0000] drop-shadow-md`}></FontAwesomeIcon>
                        </a>
                    </div>
                    
                    <div className="flex flex-col px-4 py-3 text-sm bg-black/[0.6] relative">
                        <div 
                            className={`absolute top-0 left-0 bg-white h-1 -mt-1 mix-blend-difference`}
                            style={{width: `${this.state.previewProgress}%`}}
                        ></div>
                        
                        <div className="font-semibold flex items-center">
                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                            {this.props.track.artist}
                        </div>
                        
                        <p className="mt-3 font-semibold">
                            <FontAwesomeIcon className="mr-4" icon={faClock} />
                            {moment(this.props.track.played_at).fromNow(true)} ago
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}