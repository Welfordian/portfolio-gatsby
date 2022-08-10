import * as React from "react"
import Layout from "../Layout";
import { io } from "socket.io-client";
import EventHandler from './EventHandler';
import EventEmitter from './EventEmitter';
import Modal from "../Modal";
import {Helmet} from "react-helmet";
import Chat from "./Chat";
import WatchArea from "./WatchArea";

const isBrowser = typeof window !== "undefined"

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalOpen: false,
            name: "Josh",
            connected: false,
            socketId: null,
            socket: null,
        }
    }

    componentDidMount() {
        const socket = io(`${process.env.SOCKET_URL}`, {
            query: {
                roomid: isBrowser ? window.location.pathname.replace('/watch-together/','') : null,
                name: this.state.name
            }
        });

        new EventHandler(this, socket);

        this.setState({ socket, eventEmitter: new EventEmitter(this, socket) });
    }

    joinRoom() {
        if (this.state.name.trim().length > 3) {
            this.setState({ modalOpen: false });
        } else {
            alert('Please enter a valid name...');
            
            return;
        }
        
        const socket = io('http://localhost:3000', {
            query: {
                roomid: isBrowser ? window.location.pathname.replace('/watch-together/','') : null,
                name: this.state.name
            }
        });

        new EventHandler(this, socket);

        this.setState({ socket, eventEmitter: new EventEmitter(this, socket) });
    }
    
    toggleLock() {
        this.setState({
            isLocked: ! this.state.isLocked
        })
    }

    render() {        
        return (
            <Layout hideSocial hideTagline>
                {
                    ! this.state.modalOpen
                    ?
                        this.state.connected 
                            ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 grow flex l">
                                <WatchArea
                                    socket={this.state.socket}
                                ></WatchArea>
                                
                                <Chat
                                    socket={this.state.socket}
                                    socketId={this.state.socketId}
                                    online={this.state.online}
                                />
                            </div>
                            :
                            <h1 className="text-4xl text-center">Disconnected.</h1>
                    :
                        <Modal title="Enter a name" open={this.state.modalOpen} buttons={[<button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.joinRoom()}>Join</button>]}>
                            <input autoComplete={`off`} type="text" className="w-full px-2 py-3 text-lg" placeholder="Jane Doe" onChange={e => this.setState({name: e.target.value})} value={this.state.name} />
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