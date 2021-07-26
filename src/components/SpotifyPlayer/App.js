import React from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';
import PlayerControls from "./PlayerControls";
import PlayerImage from "./PlayerImage";
import PlayerInfo from "./PlayerInfo";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: false,
            playerState: {"timestamp":1627210316405,"context":{"uri":"spotify:user:joshgbizit:collection","metadata":{}},"position":34767,"duration":231748,"paused":false,"playback_quality":"VERY_HIGH","playback_features":{"hifi_status":"NONE"},"shuffle":false,"repeat_mode":0,"track_window":{"current_track":{"id":"4Kjo34blxmLG5HNUKEvHRM","uri":"spotify:track:4Kjo34blxmLG5HNUKEvHRM","type":"track","uid":"1be4789a9b4bb063e889","linked_from":{"uri":"spotify:track:1bPo0RfCT7T4GHblhc7c7R","id":"1bPo0RfCT7T4GHblhc7c7R"},"media_type":"audio","track_type":"audio","name":"Happen To Me","duration_ms":231748,"artists":[{"name":"BENEE","uri":"spotify:artist:0Cp8WN4V8Tu4QJQwCN5Md4"}],"album":{"uri":"spotify:album:4KKRAmQ0ksj32l7mrgLOcF","name":"Hey u x","images":[{"url":"https://i.scdn.co/image/ab67616d00001e024bd20e01d00de4b35b61f5f7","height":300,"width":300},{"url":"https://i.scdn.co/image/ab67616d000048514bd20e01d00de4b35b61f5f7","height":64,"width":64},{"url":"https://i.scdn.co/image/ab67616d0000b2734bd20e01d00de4b35b61f5f7","height":640,"width":640}]},"is_playable":true},"next_tracks":[{"id":"5YqdiryRmdAzYFlxo43hAJ","uri":"spotify:track:5YqdiryRmdAzYFlxo43hAJ","type":"track","uid":"f8765d4316c9ea7d3c7e","linked_from":{"uri":null,"id":null},"media_type":"audio","track_type":"audio","name":"Missing Piece","duration_ms":217408,"artists":[{"name":"Vance Joy","uri":"spotify:artist:10exVja0key0uqUkk6LJRT"}],"album":{"uri":"spotify:album:6zQCdokfVne8dFU5Z5BpS3","name":"Missing Piece","images":[{"url":"https://i.scdn.co/image/ab67616d00001e0238da495cd8cb713b1980f657","height":300,"width":300},{"url":"https://i.scdn.co/image/ab67616d0000485138da495cd8cb713b1980f657","height":64,"width":64},{"url":"https://i.scdn.co/image/ab67616d0000b27338da495cd8cb713b1980f657","height":640,"width":640}]},"is_playable":true},{"id":"29CDTN3TfjGr4f1yRQqAtV","uri":"spotify:track:29CDTN3TfjGr4f1yRQqAtV","type":"track","uid":"d5c658ffbf7dcf752230","linked_from":{"uri":null,"id":null},"media_type":"audio","track_type":"audio","name":"The Walls Are Way Too Thin","duration_ms":220840,"artists":[{"name":"Holly Humberstone","uri":"spotify:artist:0nnYdIpahs41QiZ9MWp5Wx"}],"album":{"uri":"spotify:album:4ZxaSVlcGYPFEqnP5KeqmE","name":"The Walls Are Way Too Thin","images":[{"url":"https://i.scdn.co/image/ab67616d00001e02eb96df93b4aa585baa0d6d19","height":300,"width":300},{"url":"https://i.scdn.co/image/ab67616d00004851eb96df93b4aa585baa0d6d19","height":64,"width":64},{"url":"https://i.scdn.co/image/ab67616d0000b273eb96df93b4aa585baa0d6d19","height":640,"width":640}]},"is_playable":true}],"previous_tracks":[]},"restrictions":{"disallow_skipping_prev_reasons":["no_prev_track"],"disallow_resuming_reasons":["not_paused"]},"disallows":{"skipping_prev":true,"resuming":true},"loading":false},
        }

        setInterval(() => {
            if (this.state.player) {
                if (! this.state.playerState.paused) {
                    this.setState({
                        playerState: {
                            ...this.state.playerState,
                            position: this.state.playerState.position + 300,
                        }
                    });
                }
            }
        }, 300);
    }

    componentDidMount() {
        window.onSpotifyWebPlaybackSDKReady = () => {
            this.setState({
                player: new window.Spotify.Player({
                    name: `Josh Welford's Web Player`,
                    getOAuthToken: cb => { cb(this.props.token); }
                })
            })

            this.state.player.addListener('player_state_changed', state => {
                if (state !== null) {
                    this.setState({playerState: state})
                }
            });

            this.state.player.addListener('ready', ({ device_id }) => {
                axios.put('https://api.spotify.com/v1/me/player', {device_ids: [device_id]}, {
                    headers: {
                        Authorization: `Bearer ${this.props.token}`
                    },
                })
            });

            this.state.player.connect();
        };
    }

    updateSeekPosition(position) {
        this.state.player.seek(position);
    }

    render() {
        return (
            <div className={`inline-flex flex-col justify-center bg-black p-8`}>
                <PlayerImage player={this.state.player} playerState={this.state.playerState} />

                <div className={`mt-4`}>
                    <PlayerInfo player={this.state.player} playerState={this.state.playerState} />
                </div>

                <Slider
                    progress
                    min={0}
                    max={this.state.playerState.duration}
                    value={this.state.playerState.position}
                    onChange={this.updateSeekPosition.bind(this)}
                    className={`mt-8`}
                    trackStyle={{backgroundColor: '#57B560'}}
                    railStyle={{backgroundColor: 'gray'}}
                    handleStyle={{backgroundColor: 'white', border: 'none'}}
                />

                <div className={`flex justify-center mt-8`}>
                    <PlayerControls token={this.props.token} player={this.state.player} playerState={this.state.playerState} />
                </div>

                <Helmet>
                    <script crossorigin src="https://sdk.scdn.co/spotify-player.js"></script>
                </Helmet>
            </div>
        );
    }
}

export default App;