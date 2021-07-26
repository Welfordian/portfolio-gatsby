import React from 'react';
import Player from "./player";
import Search from "./search";
import axios from 'axios';

const isBrowser = typeof window !== "undefined"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: isBrowser ? (window.location.pathname.replace('/youtify/','').length > 0 ? window.location.pathname.replace('/youtify/','') : null) : null,
            slug: isBrowser ? window.location.pathname.replace('/youtify/','') : null,
            tracks: [],
            videos: [],
        }

        this.determineSavedPlaylist()
    }

    determineSavedPlaylist() {
        if (this.state.slug.length > 0) {
            axios.get(`http://welford-api.test/v1/playlists/${this.state.slug}`).then(r => {
                this.setState({
                    tracks: r.data.tracks,
                    videos: r.data.videos,
                })
            })
        }
    }

    render () {
        return (
            <div className={`mt-12`}>
                {
                    this.state.playlist ?
                        <Player playlist={this.state.playlist} tracks={this.state.tracks} videos={this.state.videos} token={this.props.token} preloaded={this.state.slug.length} /> :
                        <Search
                            onPlaylist={(playlist) => {this.setState({playlist})}}
                            playlist={this.state.playlist} />
                }
            </div>
        );
    }
}

export default App;