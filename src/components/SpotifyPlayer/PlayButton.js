import React from 'react';
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

class PlayButton extends React.Component {
    render () {
        return (
            <div onClick={() => {this.props.player.togglePlay()}} className={`bg-white text-black inline p-3 inline-flex items-center justify-center rounded-full`}>
                {this.props.playerState.paused ? <PlayIcon className={`h-5 w-5`} /> : <PauseIcon className={`h-5 w-5`} />}
            </div>
        )
    }
}

export default PlayButton