import React from 'react';

class PlayerInfo extends React.Component {
    render () {
        return (
            <div className={`text-white max-w-full`}>
                <p className={`break-words`}>{this.props.playerState.track_window.current_track.name}</p>
                <p>{this.props.playerState.track_window.current_track.artists[0].name}</p>
            </div>
        )
    }
}

export default PlayerInfo