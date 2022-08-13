import React from 'react';
import Seo from "../seo";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/pro-solid-svg-icons";
import { io } from "socket.io-client";
import { isBrowser } from "../../services/auth";


class Chat extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            initialList: [],
            streams: [],
        }
    }

    connectToNewUser (userId, stream) {
        const call = this.peer.call(userId, stream, { metadata: { userId: this.peer.id } });

        call.on("stream", (userVideoStream) => {
            this.addVideoStream(userVideoStream, false, call.peer);
        });
    }

    componentDidMount() {
        let waitForPeerInterval = setInterval.prototype;

        waitForPeerInterval = setInterval(() => {
            if (('Peer' in window)) {
                clearInterval(waitForPeerInterval);
                
                this.boot();
            }
        }, 200);
    }
    
    boot() {
        this.socket = io('http://localhost:3030');

        this.peer = new window.Peer(undefined, {
            path: "/peerjs",
            host: "localhost",
        });

        this.socket.on('user-disconnected', (userId) => {
            let streams = this.state.streams.filter(stream => {
                return stream.peer !== userId
            })

            this.setState({ streams })
        })

        this.socket.on('user-list', list => {
            this.setState({ initialList: list })
        })

        this.peer.on("open", (id) => {
            this.socket.emit("join-room", (isBrowser() ? window.location.pathname.replace('/chat/','') : null), id);
        });

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        }).then((stream) => {
            this.addVideoStream(stream, true);

            this.peer.on("call", (call) => {
                call.answer(stream);

                call.on("stream", (userVideoStream) => {
                    this.addVideoStream(userVideoStream, false, call.peer);
                });
            });

            this.state.initialList.forEach(user => {
                if (user !== this.peer.id) {
                    this.connectToNewUser(user, stream);
                }
            })

            this.socket.on("user-connected", (userId) => {
                this.connectToNewUser(userId, stream);
            });
        });
    }

    addVideoStream (stream, mute = false, peer = null) {
        let videoRef = React.createRef();
        
        let foundPeer = this.state.streams.find(stream => {
            return stream.peer === peer;
        })
        
        if (foundPeer !== undefined) return;
        
        let video = (
            <video
                playsInline={true}
                muted={mute}
                className={`rounded-lg object-cover self-start shadow-lg shadow-black/40 w-full`}
                style={{transform: 'rotateY(180deg)'}}
                ref={videoRef}
                onLoadedMetadata={() => { videoRef.current.play(); }}
            ></video>
        )

        this.setState({
            streams: [...this.state.streams, {peer, video}]
        }, () => {
            this.forceUpdate();
            videoRef.current.srcObject = stream;
        });
    };

    render() {        
        if (isBrowser()) {
            let script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.4.7/peerjs.min.js';
            document.head.append(script);
        }
        
        return (
            <div className={`flex grow`}>
                <Seo title="Chat App" />

                <div className={`flex flex-col justify-between grow-0 w-full`}>
                    <div className={`w-full bg-red-500 justify-center flex py-6 bg-gray-700 text-white`}>
                        <p className={`text-xl`}>Video Chat</p>
                        
                        <div className={`w-12 h-12 resize`}></div>
                    </div>

                    <div className={`w-full bg-gray-800 grow items-stretch items-center justify-center flex`}>
                        <div className={`w-full lg:columns-3 sm:columns-2 p-4`}>
                                {
                                    this.state.streams.map(stream => {
                                        return <div className={`w-full grow flex p-4 resize`}>{stream.video}</div>;
                                    })
                                }
                        </div>

                        {/*<div className={`bg-gray-600 w-4/12 flex-col hidden md:flex`}>*/}
                        {/*    <div className={`flex grow`}>*/}
                        {/*        */}
                        {/*    </div>*/}
                        {/*    */}
                        {/*    <div className={`flex px-4 py-5 gap-3 items-center`}>*/}
                        {/*        <input placeholder={`Type message here...`} className={`p-3 rounded-lg outline-none grow`} type={`text`} />*/}
                        {/*        */}
                        {/*        <button className={`px-4 py-3 bg-blue-500 text-white rounded-lg`}>*/}
                        {/*            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                

                <Helmet
                    htmlAttributes={{
                        class: 'chat-app',
                    }}
                />
            </div>
        );
    }
}

export default Chat