import React from 'react';

class PreviousPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          this.props.state && this.props.state.track_window.previous_tracks.length ? <div className={``}>
              <img className={`w-8`} src={this.props.state.track_window.previous_tracks[this.props.state.track_window.previous_tracks.length - 1].album.images[0].url} />
          </div> : <div></div>
        );
    }
}

export default PreviousPreview