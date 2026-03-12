import React from 'react';
import axios from "axios";
import Track from "./Music/Track";

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
        if (this.state.isClosed || this.state.track === null || this.state.track.item === null || this.state.track.length === 0) return (<div></div>)
        
        return (
            <Track track={this.state.track.item}></Track>
        );
    }
}

export default NowPlaying