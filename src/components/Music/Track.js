import React from "react";
import Marquee from "react-fast-marquee";
import DetectableOverflow from 'react-detectable-overflow';
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faStop, faUserMusic, faPlay} from "@fortawesome/pro-solid-svg-icons";
import { Popover } from 'react-tiny-popover'
import {faSpotify, faYoutube} from "@fortawesome/free-brands-svg-icons";
import YoutubeLinkConfirmation from "../YoutubeLinkConfirmation";
import {Levels} from "react-activity";

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
        if ('played_at' in this.props.track && this.props.track.preview_url !== null && this.props.track.preview_url.length !== 0) {
            this.audioRef.current.onended = () => {
                this.setState({ isPlayingPreview: false, previewProgress: 0 })
            }

            this.audioRef.current.onpause = () => {
                this.setState({ isPlayingPreview: false, previewProgress: 0 })
            }
        }

        requestAnimationFrame(this.previewProgress.bind(this))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.track.uri !== this.props.track.uri) {
            this.setState({
                isOverflowed: false,
            })
        }
    }

    togglePreview() {
        if (this.state.isPlayingPreview) {
            this.audioRef.current.pause();
            this.audioRef.current.currentTime = 0

            this.setState({ isPlayingPreview: false, previewProgress: 0 })
        } else {
            document.querySelectorAll('audio').forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            })

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

    pausePreview() {
        if (this.props.track.preview_url === null || this.props.track.preview_url.length === 0) return;

        this.audioRef.current.pause()
    }

    render () {
        return (
            <div className="dark:hover:shadow-gray-800 relative w-full h-[340px] md:h-[250px] md:w-[287px] transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 select-none" onMouseEnter={() => this.setState({playMarquee: false})} onMouseLeave={() => this.setState({playMarquee: true})}>
                <div className="flex flex-col justify-between text-white w-full h-[340px] md:h-[250px] md:w-[287px] bg-contain" style={{background: `url(${'album_image' in this.props.track ? this.props.track.album_image : this.props.track.album.images[0].url}) no-repeat center center`, backgroundSize: "cover"}}>
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

                        <div className={`w-full relative overflow-hidden`}>
                            <Marquee gradient={false} speed={30} play={this.state.playMarquee}>
                                <span className={`hello ${this.state.isOverflowed ? '' : 'hidden'}`}>{this.props.track.name}</span>
                            </Marquee>

                            <DetectableOverflow onChange={isOverflowed => { setTimeout(() => { this.setState({ isOverflowed }); }, 500) }}>
                                <p className={`${this.state.isOverflowed ? 'w-0 h-0': ''}`}>{this.props.track.name}</p>
                            </DetectableOverflow>
                        </div>
                    </div>

                    <div className="flex justify-center w-auto px-4 py-2">
                        {
                            this.props.track.preview_url !== null && this.props.track.preview_url.length !== 0
                                ?
                                <div>
                                    {
                                        this.state.isPlayingPreview
                                            ?
                                            <FontAwesomeIcon onClick={() => { this.togglePreview() }} icon={faStop} size={`2x`} className={`text-white drop-shadow-md mr-8 cursor-pointer`} title={`Stop Preview`}></FontAwesomeIcon>
                                            :
                                            <FontAwesomeIcon onClick={() => { this.togglePreview() }} icon={faPlay} size={`2x`} className={`text-white drop-shadow-md mr-8 cursor-pointer`} title={`Play Preview`}></FontAwesomeIcon>
                                    }
                                    <audio className={`hidden`} key={'spotify_id' in this.props.track ? this.props.track.spotify_id : this.props.track.uri} ref={this.audioRef}>
                                        <source src={this.props.track.preview_url} type="audio/mpeg" />
                                    </audio>
                                </div>
                                : <div></div>
                        }
                        <a target="_blank" rel="noopener" href={'spotify_url' in this.props.track ? this.props.track.spotify_url : this.props.track.external_urls.spotify} className={`relative cursor-pointer`}>
                            <div className={`absolute w-7 h-7 rounded-full bg-white top-[10%] left-[2%]`}></div>
                            <FontAwesomeIcon icon={faSpotify} size={`2x`} className={`text-[#1DB954] drop-shadow-md mr-8`}></FontAwesomeIcon>
                            <span style={{position: 'absolute', top: '-999999em'}}>Listen on Spotify</span>
                        </a>

                        <YoutubeLinkConfirmation href={this.props.track.youtube_url || '#now_playing'} onContinue={() => { this.pausePreview() }}>
                            <a target="_blank" rel="noopener" href={this.props.track.youtube_url || '#now_playing'} className={`relative cursor-pointer`}>
                                <div className={`absolute w-3 h-3 bg-white top-0 left-[40%]`}></div>
                                <FontAwesomeIcon icon={faYoutube} size={`2x`} className={`text-[#FF0000] drop-shadow-md`}></FontAwesomeIcon>
                                <span style={{position: 'absolute', top: '-999999em'}}>Listen on YouTube</span>
                            </a>
                        </YoutubeLinkConfirmation>
                    </div>

                    <div className="flex flex-col px-4 py-3 text-sm bg-black/[0.6] relative">
                        <div
                            className={`absolute top-0 left-0 bg-white h-1 -mt-1 mix-blend-difference`}
                            style={{width: `${this.state.previewProgress}%`}}
                        ></div>

                        <div className="font-semibold flex items-center">
                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                            {this.props.track.artist || this.props.track.artists[0].name}
                        </div>

                        <p className="mt-3 font-semibold flex items-center">
                            {
                                'played_at' in this.props.track
                                    ?
                                    <FontAwesomeIcon className="mr-4" icon={faClock} />
                                    :
                                    <Levels className={`inline-block mr-4`} />
                            }

                            {
                                'played_at' in this.props.track
                                    ?
                                    `${moment(this.props.track.played_at).fromNow(true)} ago`
                                    :
                                    "Listening Now"
                            }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}