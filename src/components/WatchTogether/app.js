import * as React from "react"
import Layout from "../Layout";
import { io } from "socket.io-client";
import EventHandler from './EventHandler';
import EventEmitter from './EventEmitter';
import Modal from "../Modal";
import {Helmet} from "react-helmet";
import YouTube from 'react-youtube'
import Search from "./Search";
import VideoControls from "./VideoControls";

const isBrowser = typeof window !== "undefined"

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            updateInterval: setInterval.prototype,
            startTime: 0,
            player: false,
            searchTerm: "",
            videoId: false,
            modalOpen: false,
            name: "",
            connected: false,
            online: 0,
        }
    }

    componentDidMount() {
        const socket = io('http://localhost:3000', {
            query: {
                roomid: isBrowser ? window.location.pathname.replace('/watch-together/','') : null,
                name: this.state.name
            }
        });

        new EventHandler(this, socket);

        this.setState({ eventEmitter: new EventEmitter(this, socket) });
        
        this.waitForPlayer();
    }
    
    startUpdateInterval() {
        this.setState({ updateInterval: setInterval(() => {
            if (this.state.player) {
                this.state.eventEmitter.updateTime(this.state.player.getCurrentTime());
            }
        }, 10)});
    }
    
    waitForPlayer() {
        let playerInterval = setInterval(() => {
            if (this.state.player) {
                console.log(this.state.player);
                if ('playVideo' in this.state.player) {
                    clearInterval(playerInterval);
                    
                    this.state.player.playVideo();
                    this.state.player.seekTo(this.state.startTime);
                }
            }
        }, 50);
    }
    
    onVideoReady(e) {
        this.setState({ player: e.target });
    }

    joinRoom() {
        if (this.state.name.trim().length > 3) {
            this.setState({ modalOpen: false });
        } else {
            alert('Please enter a valid name...');
            
            return;
        }
        
        // const socket = io('http://localhost:3000', {
        //     query: {
        //         roomid: isBrowser ? window.location.pathname.replace('/watch-together/','') : null,
        //         name: this.state.name
        //     }
        // });
        //
        // new EventHandler(this, socket);
        //
        // this.setState({ eventEmitter: new EventEmitter(this, socket) });
    }

    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                controls: 0
            }
        };
        
        return (
            <Layout hideSocial hideTagline>
                {
                    ! this.state.modalOpen
                    ?
                        this.state.connected 
                            ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 grow flex">
                                <div className="lg:col-span-2 grow-0 space-x-1">
                                    <Search searchTerm={this.state.searchTerm} onChange={searchTerm => this.setState({ searchTerm })} onVideoId={(id) => { this.state.eventEmitter.setVideo(id) }} />

                                    {
                                        this.state.videoId ? 
                                            <div class="flex flex-col">
                                                <div className="aspect-w-16 aspect-h-9 mt-8">
                                                    <YouTube videoId={this.state.videoId} onStateChange={s => console.log(s)} opts={opts} onReady={e => this.onVideoReady(e)} />
                                                    <div class={`flex`}></div>
                                                </div>

                                                <VideoControls player={this.state.player} onPlay={() => {}} onPause={() => {}}></VideoControls>
                                            </div>
                                         : ''
                                    }
                                </div>
                                <div className="bg-black grow text-white p-3">
                                    <p className="text-right">{ this.state.online } Online Now</p>
                                </div>
                            </div>
                            :
                            <h1 className="text-4xl text-center">Disconnected.</h1>
                    :
                        <Modal title="Enter a name" open={this.state.modalOpen} buttons={[<button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.joinRoom()}>Join</button>]}>
                            <input type="text" className="w-full px-2 py-3 text-lg" placeholder="Jane Doe" onChange={e => this.setState({name: e.target.value})} value={this.state.name} />
                        </Modal>  
                }

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </Layout>
        );
    }
}

export default App

export function Head() {
    return (
        <style dangerouslySetInnerHTML={{__html: `
                        html {
                            background: red !important;
                        }
                    `}}>
        </style>
    )
}