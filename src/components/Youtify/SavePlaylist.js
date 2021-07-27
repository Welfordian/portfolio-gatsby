import React from 'react';
import axios from 'axios';

const isBrowser = typeof window !== "undefined"

class SavePlaylist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaylist: this.props.isPlaylist
        }
    }

    savePlaylist() {
        axios.post('https://api.welford.me/v1/playlists', {
            videos: this.props.videos,
            tracks: this.props.tracks
        }).then(r => {
            isBrowser ? window.history.pushState({}, "", `https://welford.me/youtify/${r.data.slug}`) : false

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