import React from 'react';

class NextPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.state ? <div className={`text-center`}>
                <img className={`w-8`} src={this.props.state.track_window.next_tracks[0].album.images[0].url} />
            </div> : <div></div>
        );
    }
}

export default NextPreview