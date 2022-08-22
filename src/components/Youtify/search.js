import React from 'react';

class Search extends React.Component {
    handlePlaylistUpdate({target}) {
        try {
            let rgx = new RegExp(/\/playlist.*\?/);

            this.props.onPlaylist((rgx.exec(target.value))[0].replace('/playlist/', '').replace('?', ''));
        } catch (error) {}
    }

    render() {
        return (
            <div>
                <p className="text-4xl dark:text-gray-300">Spotify Playlist URL</p>

                <input className="border-4 border-black w-full px-2 py-3 mt-8" type={"text"} onChange={this.handlePlaylistUpdate.bind(this)} />
            </div>
        );
    }
}

export default Search;