import React from 'react';

class PlayerImage extends React.Component {
    render() {
        return (
            <img src={this.props.playerState.track_window.current_track.album.images[0].url} />
        )
    }
}

export default PlayerImage