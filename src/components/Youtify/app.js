import React from 'react';
import Player from "./player";
import Search from "./search";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlist: null,
        }
    }
    render () {
        return (
            <div className={`mt-12`}>
                {
                    this.state.playlist ?
                        <Player playlist={this.state.playlist} token={this.props.token} /> :
                        <Search
                            onPlaylist={(playlist) => {this.setState({playlist})}}
                            playlist={this.state.playlist} />
                }
            </div>
        );
    }
}

export default App;