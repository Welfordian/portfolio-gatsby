import React from 'react';
import { TbPlayerTrackNextFilled } from "react-icons/tb";

class NextButton extends React.Component {
    render () {
        return (
            <div onClick={() => {this.props.player.nextTrack()}} className={`${this.props.playerState.track_window.next_tracks.length ? "text-white" : "text-gray-300"} inline p-4 inline-flex items-center justify-center rounded-full`}>
                <TbPlayerTrackNextFilled />
            </div>
        )
    }
}

export default NextButton