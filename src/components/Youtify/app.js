import React from 'react';
import Player from "./player";
import Search from "./search";

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
    }

    render () {
        return (
            <div className={``}>
                {
                    this.state.playlist
                        ?
                            <Player playlist={this.state.playlist} tracks={this.state.tracks} videos={this.state.videos} token={this.props.token} slug={this.state.slug} />
                        :
                            <Search
                                onPlaylist={(playlist) => {this.setState({playlist})}}
                                playlist={this.state.playlist}
                            />
                }
            </div>
        );
    }
}

export default App;