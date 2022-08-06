import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/pro-solid-svg-icons";

class VideoControls extends React.Component {
    constructor() {
        super();
    }
    
    playVideo() {
        this.props.onPlay();
        this.props.player.playVideo();
    }
    
    pauseVideo() {
        this.props.onPause();
        this.props.player.pauseVideo();
    }
    
    render () {
        return (
            <div className="flex w-full bg-[#00000085] text-white p-4 gap-4 -mt-[3.6rem] z-10">
                <h1 onClick={() => { this.playVideo() }}>
                    <FontAwesomeIcon icon={faPlay} />
                </h1>
                
                <h1 onClick={() => { this.pauseVideo() }}>
                    <FontAwesomeIcon icon={faPause} />
                </h1>
            </div>
        )
    }
}

export default VideoControls