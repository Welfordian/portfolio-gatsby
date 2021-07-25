import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStepForward} from "@fortawesome/free-solid-svg-icons";

class NextButton extends React.Component {
    render () {
        return (
            <div onClick={() => {this.props.player.nextTrack()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon icon={faStepForward} />
            </div>
        )
    }
}

export default NextButton