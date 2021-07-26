import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRepeat} from "@fortawesome/pro-solid-svg-icons";

class RepeatButton extends React.Component {
    toggleRepeat() {
        // Do something
    }

    render() {
        return (
            <div onClick={() => {this.toggleRepeat()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <FontAwesomeIcon icon={faRepeat} />
            </div>
        );
    }
}

export default RepeatButton