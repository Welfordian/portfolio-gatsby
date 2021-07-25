import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

class PlayButton extends React.Component {
    render () {
        return (
            <div onClick={() => {this.props.player.togglePlay()}} className={`bg-white text-black inline p-3 inline-flex items-center justify-center rounded-full`}>
                {
                    this.props.playerState.paused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />
                }
            </div>
        )
    }
}

export default PlayButton