import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import Playlist from "./playlist";
import SavePlaylist from "./SavePlaylist";

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            processedIndex: 0,
            tracks: this.props.tracks,
            videos: this.props.videos,
            currentVideoIndex: 0,
            youtubeKey: 'AIzaSyBMDzO5UCJyXyo1FD1a4ShFeTY0M0UFnbA'
        }
    }

    componentDidMount() {
        if (this.props.slug.length) {
            this.determineSavedPlaylist()
        } else {
            axios.get(`https://api.spotify.com/v1/playlists/${this.props.playlist}`, {
                headers: {
                    Authorization: 'Bearer ' + this.props.token
                }
            }).then(response => {
                this.setState({
                    tracks: response.data.tracks.items
                });

                this.startProcessing();
            });
        }
    }

    determineSavedPlaylist() {
        if (this.props.slug.length > 0) {
            axios.get(`https://api.welford.me/v1/playlists/${this.props.slug}`).then(r => {
                this.setState({
                    tracks: r.data.tracks,
                    videos: r.data.videos,
                });
            })
        }
    }

    startProcessing() {
        let track = this.state.tracks[this.state.processedIndex];

        axios.get('https://www.googleapis.com/youtube/v3/search?maxResults=1&key=' + this.state.youtubeKey + '&maxResults=1&q=' + track.track.name + ' - ' + track.track.artists[0].name + '&type=video&part=snippet').then(response => {
            this.setState({ videos: [...this.state.videos, response.data.items[0]] });

            if (this.state.processedIndex <= this.state.tracks.length) {
                this.setState({
                    processedIndex: this.state.processedIndex + 1
                });

                this.startProcessing();
            }
        });
    }

    hasNextVideo() {
        return (this.state.currentVideoIndex + 1) < this.state.videos.length;
    }

    hasPreviousVideo() {
        return this.state.currentVideoIndex > 0;
    }

    nextVideo() {
        if ((this.state.currentVideoIndex + 1) < this.state.videos.length) {
            this.setState({ currentVideoIndex: this.state.currentVideoIndex + 1 })
        }
    }

    previousVideo() {
        if (this.state.currentVideoIndex > 0) {
            this.setState({ currentVideoIndex: this.state.currentVideoIndex - 1 })
        }
    }

    switchVideo(index) {
        this.setState({ currentVideoIndex: index });
    }

    render () {
        const opts = {
            height: 'auto',
            width: '100%',
            playerVars: {
                autoplay: 1
            },
        };

        return (
            <div>
                {
                    this.state.videos.length
                        ?
                        <div className="flex flex-col justify-between">
                            <div className={`w-full`}>
                                <YouTube className={`w-full`} containerClassName={`aspect-w-16 aspect-h-9`} videoId={this.state.videos[this.state.currentVideoIndex].id.videoId} opts={opts} onEnd={this.nextVideo.bind(this)} />
                                <div className="flex justify-between mt-4">
                                    <button className={this.hasPreviousVideo() ? 'text-black' : 'text-gray-300'} onClick={this.previousVideo.bind(this)}>Previous</button>
                                    <SavePlaylist videos={this.state.videos} tracks={this.state.tracks} isPlaylist={this.props.slug.length} />
                                    <button className={this.hasNextVideo() ? 'text-black' : 'text-gray-300'} onClick={this.nextVideo.bind(this)}>Next</button>
                                </div>
                            </div>

                            <Playlist onChange={this.switchVideo.bind(this)} currentVideoIndex={this.state.currentVideoIndex} playlist={this.state.tracks} />
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

export default Player;