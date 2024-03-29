import * as React from "react"
import { navigate } from 'gatsby';
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import {isBrowser} from "../services/auth";
import {ThemeProvider} from "../context/Layout";
import {Helmet} from "react-helmet";

class WatchTogether extends React.Component {
    constructor() {
        super();
        
        this.state = {
            roomId: "",
            modalOpen: false,
            modalButtons: [
                <button className="bg-black text-white px-3 py-4 w-36" onClick={() => isBrowser() && (window.location.href =`/watch-together/${this.state.roomId}`)}>Join Room</button>,
                <button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.setState({modalOpen: false})}>Cancel</button>
            ]
        }
    }
    
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    
    createRoom() {
        isBrowser() && (window.location.href = `/watch-together/${this.uuidv4()}`);
    }
    
    render() {
        return (
            <div className={`mt-32`}>
                <h1 className="text-4xl text-center">Watch Together</h1>

                <p className="mt-3 text-center">Watch YouTube videos together in sync</p>

                <div className="flex justify-center gap-5 mt-12">
                    <button className="bg-black text-white px-3 py-4 w-36 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-gray-700 dark:to-gray-900" onClick={() => this.createRoom()}>Create Room</button>

                    <button className="bg-black text-white px-3 py-4 w-36 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-gray-700 dark:to-gray-900" onClick={() => this.setState({modalOpen: true})}>Join Room</button>
                </div>

                <Modal title="Join existing room" open={this.state.modalOpen} buttons={this.state.modalButtons}>
                    <input type="text" className="w-full px-2 py-3 text-lg" placeholder="Room ID" onChange={e => this.setState({roomId: e.target.value})} value={this.state.roomId} />
                </Modal>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </div>
        );
    }
}

export default WatchTogether
