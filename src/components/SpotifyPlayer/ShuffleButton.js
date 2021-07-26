import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRandom} from "@fortawesome/free-solid-svg-icons";

class ShuffleButton extends React.Component {
    toggleShuffle() {
        // Do something
    }

    render() {
        return (
            <div onClick={() => {this.toggleShuffle()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon className={`${this.props.playerState.shuffle ? "text-green-400" : 'text-white'}`} icon={faRandom} />
            </div>
        );
    }
}

export default ShuffleButton