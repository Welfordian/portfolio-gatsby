import React from 'react'

class SpotifyPlaylist extends React.Component {
    render() {
        return (
            <iframe 
                className={`w-full`} 
                title={this.props.title}
                src={`https://open.spotify.com/embed/playlist/${this.props.playlist}`}
                height="380" 
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
        );
    }
}

export default SpotifyPlaylist