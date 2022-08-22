import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import Playlist from "./playlist";
import SavePlaylist from "./SavePlaylist";
import {isBrowser} from "../../services/auth";

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
        
        if (track === undefined || ! ('track' in track)) return;

        axios.get(`https://youtube-search.welford.me/?artist=${track.track.artists[0].name}&track=${track.track.name}&key=Ol$c4wtIy-FV2h6$OjxXUL6-$f6wycH`).then(response => {
            this.setState({ videos: [...this.state.videos, response.data[0]] });

            if (this.state.processedIndex < this.state.tracks.length) {
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
        this.setState({ currentVideoIndex: index }, () => {
            isBrowser() && window.scrollTo({top: 0, behavior: 'smooth'})
        });
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
            <div className={`h-full`}>
                {
                    this.state.videos.length
                        ?
                        <div className="grid grid-cols-4 justify-between gap-3 md:gap-2">
                            <div className={`w-full col-span-4 md:col-span-2 lg:col-span-3`}>
                                <YouTube className={`aspect-w-16 aspect-h-9`} videoId={this.state.videos[this.state.currentVideoIndex].id.videoId} opts={opts} onEnd={this.nextVideo.bind(this)} />
                                
                                <div className="flex justify-between mt-4">
                                    <button className={this.hasPreviousVideo() ? 'text-black dark:text-gray-300' : 'text-gray-300 dark:text-gray-500'} onClick={this.previousVideo.bind(this)}>Previous</button>
                                    <SavePlaylist videos={this.state.videos} tracks={this.state.tracks} isPlaylist={this.props.slug.length} />
                                    <button className={this.hasNextVideo() ? 'text-black dark:text-gray-300' : 'text-gray-300 dark:text-gray-500'} onClick={this.nextVideo.bind(this)}>Next</button>
                                </div>
                            </div>

                            <Playlist onChange={this.switchVideo.bind(this)} currentVideoIndex={this.state.currentVideoIndex} playlist={this.state.videos} />
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

export default Player;