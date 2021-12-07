import React from 'react';
import {Helmet} from "react-helmet";
import axios from 'axios';
import PlayerControls from "./PlayerControls";
import PlayerImage from "./PlayerImage";
import PlayerInfo from "./PlayerInfo";
import PreviousPreview from "./PreviousPreview";
import NextPreview from "./NextPreview";
import Slider from 'rc-slider';
import { Levels } from "react-activity";
import 'rc-slider/assets/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: false,
            playerState: {}
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
            'track_window' in this.state.playerState ? <div className={`flex items-center`}>
                <div className={`inline-flex flex-col justify-center bg-black p-8`}>
                    <PlayerImage player={this.state.player} playerState={this.state.playerState}/>

                    <div className={`mt-4`}>
                        <PlayerInfo player={this.state.player} playerState={this.state.playerState}/>
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

                    <div className={`flex justify-between items-center mt-8`}>
                        <PreviousPreview state={this.state.playerState}></PreviousPreview>
                        <div className={`flex justify-center`}>
                        <PlayerControls token={this.props.token} player={this.state.player} playerState={this.state.playerState}/>
                        </div>
                        <NextPreview state={this.state.playerState}></NextPreview>
                    </div>

                    <Helmet>
                        <script crossOrigin src="https://sdk.scdn.co/spotify-player.js"></script>
                    </Helmet>
                </div>
            </div> : <div>
                <Levels size={40} speed={0.5}/>
                <Helmet>
                    <script crossOrigin src="https://sdk.scdn.co/spotify-player.js"></script>
                </Helmet>
            </div>
        );
    }
}

export default App;