import React from 'react';
import axios from 'axios';

class SavePlaylist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaylist: this.props.isPlaylist
        }
    }

    savePlaylist() {
        axios.post('http://welford-api.test/v1/playlists', {
            videos: this.props.videos,
            tracks: this.props.tracks
        }).then(r => {
            window.history.pushState({}, "", `https://welford.me/youtify/${r.data.slug}`);

            this.setState({
                isPlaylist: true
            })
        })
    }

    render() {
        if (! this.state.isPlaylist) {
            return (
                <div>
                    <button className={`text-black`} onClick={this.savePlaylist.bind(this)}>Save Playlist</button>
                </div>
            )
        }

        return null;
    }
}

export default SavePlaylist;