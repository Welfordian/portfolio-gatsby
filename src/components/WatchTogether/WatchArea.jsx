import React from 'react'
import Search from "./Search";
import YouTube from "react-youtube";
import VideoControls from "./VideoControls";
import EventEmitter from './EventEmitter';
import EventBus from "./EventBus";

class WatchArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateInterval: setInterval.prototype,
            isOwner: false,
            videoId: false,
            player: false,
            duration: false,
            position: 0,
            searchTerm: '',
            eventEmitter: new EventEmitter(this, this.props.socket)
        }

        EventBus.on('set_video_id', ({id}) => {
            this.setState({ searchTerm: "", videoId: id, playing: true });
            this.updateDuration();
        })
        
        EventBus.on('initial_response', ({isOwner, time, owner, socketId, videoId, users}) => {
            this.setState({
                position: time, videoId, isOwner: owner, socketId, users, playing: true
            })

            this.startUpdateInterval(isOwner);
            this.updateSeekPosition(this.state.position);
        })
        
        EventBus.on('set_video_time', time => this.state.player.seekTo(time))
        
        this.waitForPlayer();
    }

    startUpdateInterval(isOwner = false) {
        this.setState({isOwner: true});
        
        if (isOwner) {
            this.setState({ isOwner: true, updateInterval: setInterval(() => {
                    if (this.state.player) {
                        this.state.eventEmitter.updateTime(this.state.player.getCurrentTime());
                    }
                }, 10)});
        }

        this.waitForPlayer(() => {
            setInterval(() => {
                this.setState({
                    positionForProgressBar: this.state.player.getCurrentTime()
                })
            }, 100);
        });
    }

    updateSeekPosition(position) {
        this.waitForPlayer(() => {
            if (this.state.isOwner) {
                this.state.player.seekTo(position);
                this.state.eventEmitter.updateTime(position, true);
            }
        })
    }

    waitForPlayer(fn = false) {
        if (fn === false) {
            let playerInterval = setInterval(() => {
                if (this.state.player) {
                    if ('playVideo' in this.state.player) {
                        clearInterval(playerInterval);

                        this.state.player.playVideo();
                        this.state.player.seekTo(this.state.startTime);

                        setTimeout(() => {
                            this.state.player.unMute();
                        }, 800);
                    }
                }
            }, 50);
        } else {
            let playerInterval = setInterval(() => {
                if (this.state.player) {
                    if ('playVideo' in this.state.player) {
                        clearInterval(playerInterval);

                        fn();
                    }
                }
            }, 50);
        }
    }

    updateDuration() {
        this.waitForPlayer(() => {
            this.setState({ duration: this.state.player.getDuration() });
        });
    }

    onVideoReady(e) {
        this.setState({ player: e.target });
        this.updateDuration();
    }

    handlePlay() {
        if (this.state.isOwner) {
            this.setState({ playing: true });
            this.state.player.playVideo();
        }
    }

    handlePause() {
        if (this.state.isOwner) {
            this.setState({ playing: false });
            this.state.player.pauseVideo();
        }
    }

    render () {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                controls: 0,
                mute: 1,
                autoplay: 1
            }
        };
        
        return (
            <div className="lg:col-span-2 grow-0 space-x-1">
                <Search 
                    searchTerm={this.state.searchTerm}
                    onChange={searchTerm => this.setState({ searchTerm })}
                    onVideoId={(id) => { this.state.eventEmitter.setVideo(id) }}
                />

                {
                    this.state.videoId ?
                        <div className="flex flex-col">
                            <div className="aspect-w-16 aspect-h-9 mt-4">
                                <YouTube 
                                    videoId={this.state.videoId}
                                    opts={opts}
                                    onReady={e => this.onVideoReady(e)}
                                />
                                
                                <div className={`flex`}></div>
                            </div>

                            <VideoControls
                                playing={this.state.playing}
                                isOwner={this.state.isOwner}
                                player={this.state.player}
                                duration={this.state.duration}
                                position={this.state.positionForProgressBar}
                                updateSeekPosition={(position) => { this.updateSeekPosition(position) }}
                                onPlay={() => this.handlePlay()}
                                onPause={() => this.handlePause()}
                            ></VideoControls>
                        </div>
                        : ''
                }
            </div>
        )
    }
}

export default WatchArea