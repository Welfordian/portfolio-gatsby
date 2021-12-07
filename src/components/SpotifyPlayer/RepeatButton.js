import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRepeat} from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";

class RepeatButton extends React.Component {
    constructor(props) {
        super(props);

        this.repeatModes = ['off', 'context', 'track'];
    }
    toggleRepeat() {
        let repeatMode = this.determineRepeatMode();

        axios.put(`https://api.spotify.com/v1/me/player/repeat?state=${repeatMode}`, {}, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
    }

    determineRepeatMode() {
        let newRepeatMode = 0;
        let currentRepeatMode = this.props.playerState.repeat_mode;

        if (currentRepeatMode < 2) {
            newRepeatMode = currentRepeatMode + 1;
        }

        return this.repeatModes[newRepeatMode];
    }

    render() {
        return (
            <div onClick={() => {this.toggleRepeat()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon className={`${this.props.playerState.repeat_mode > 0 ? "text-green-400" : 'text-white'}`} icon={faRepeat} />
            </div>
        );
    }
}

export default RepeatButton