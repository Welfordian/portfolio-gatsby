import * as React from "react"
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import {isBrowser} from "../services/auth";

class Chat extends React.Component {
    constructor() {
        super();

        this.state = {
            roomId: "",
            modalOpen: false,
            modalButtons: [
                <button className="bg-black text-white px-3 py-4 w-36" onClick={() => isBrowser() && (window.location.href =`/chat/${this.state.roomId}`)}>Join Chat</button>,
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
        isBrowser() && (window.location.href = `/chat/${this.uuidv4()}`);
    }

    render() {
        return (
            <div className={`mt-32`}>
                <h1 className="text-4xl text-center">Chat Together</h1>

                <p className="mt-3 text-center">Chat with multiple people via video</p>

                <div className="flex justify-center gap-5 mt-12">
                    <button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.createRoom()}>Create Chat</button>

                    <button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.setState({modalOpen: true})}>Join Chat</button>
                </div>

                <Modal title="Join existing chat" open={this.state.modalOpen} buttons={this.state.modalButtons}>
                    <input type="text" className="w-full px-2 py-3 text-lg" placeholder="Chat ID" onChange={e => this.setState({roomId: e.target.value})} value={this.state.roomId} />
                </Modal>
            </div>
        );
    }
}

export default Chat
