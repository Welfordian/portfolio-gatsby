import React from 'react';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Levels} from "react-activity";
import Marquee from "react-fast-marquee";
import DetectableOverflow from "react-detectable-overflow";
import {faTimes} from "@fortawesome/pro-light-svg-icons";
import {Popover} from "react-tiny-popover";
import Track from "./Music/Track";

class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            track: null,
            isClosed: false,
            isOverflowed: false,
            popoverOpen: false,
        }

        this.explicit = <div className={`bg-gray-700 shadow-md text-white px-2 py-1`}>Explicit</div>
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
        if (this.state.isClosed || this.state.track === null || this.state.track.item === null || this.state.track.length === 0) return (<div></div>)
        
        let image = this.state.track?.item?.album?.images[0];
        
        return (
            <Track track={this.state.track.item}></Track>
        );
    }
}

export default NowPlaying