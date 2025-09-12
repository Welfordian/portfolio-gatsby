import React from 'react';
import { RiShuffleLine } from "react-icons/ri";
import axios from 'axios';

class ShuffleButton extends React.Component {
    toggleShuffle() {
        axios.put(`https://api.spotify.com/v1/me/player/shuffle?state=${!this.props.playerState.shuffle}`, {}, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
    }

    render() {
        return (
            <div onClick={() => {this.toggleShuffle()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <RiShuffleLine className={`${this.props.playerState.shuffle ? "text-green-400" : 'text-white'}`} />
            </div>
        );
    }
}

export default ShuffleButton