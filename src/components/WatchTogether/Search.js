import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchTimeout: setTimeout.prototype
        }
    }
    
    playVideo(e) {
        let key = e.code || e.key;
        let videoRegex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
        
        if (key !== 'Enter') return;
        
        let videoId = videoRegex.exec(this.props.searchTerm);
        
        if (videoId === null) {
            alert('Enter a valid YouTube video URL');
            this.props.onChange("");
        } else {
            this.props.onVideoId(videoId[1]);
        }
    }

    // search() {
    //     clearTimeout(this.state.searchTimeout);
    //    
    //     const search = () => {
    //         console.log('Searching...');
    //     };
    //
    //     this.state.searchTimeout = setTimeout(search, 1000);
    // }
    
    render () {
        return (
            <input
                value={this.props.searchTerm}
                onChange={e => this.props.onChange(e.target.value)}
                onKeyUp={e => this.playVideo(e)}
                placeholder="Search YouTube..."
                type="text"
                className="text-black placeholder-gray-500 border-4 border-black w-full p-2 text-lg"
            />
        )
    }
}

export default Search