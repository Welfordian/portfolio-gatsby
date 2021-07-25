import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStepBackward} from "@fortawesome/free-solid-svg-icons";

class PreviousButton extends React.Component {
    render () {
        return (
            <div onClick={() => {this.props.player.previousTrack()}} className={`${this.props.playerState.track_window.previous_tracks.length ? "text-white" : "text-gray-600"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon icon={faStepBackward} />
            </div>
        )
    }
}

export default PreviousButton