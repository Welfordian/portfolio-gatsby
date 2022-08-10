import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUnlock} from "@fortawesome/pro-solid-svg-icons";
import EventEmitter from "./EventEmitter";
import EventBus from "./EventBus";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            socketId: null,
            online: 0,
            chat: [],
            eventEmitter: new EventEmitter(this, this.props.socket)
        }
        
        EventBus.on('initial_response', ({time, owner, socketId, videoId, users}) => {
            this.setState({ isOwner: owner, socketId, startTime: time, videoId, online: Object.keys(users).length })
        })
        
        EventBus.on('receive_chat', chat => {
            this.pushChat({...chat, self: chat.sender === this.state.socketId});
        })
        
        EventBus.on('presence_update', ({online}) => {
            this.setState({ online })
        })
        
        EventBus.on('cmd_clear_chat', () => {
            this.setState({chat: []});
        })
    }

    sendChat(e) {
        let message = e.target.value;

        this.clearMessage();

        this.state.eventEmitter.sendChat(message);
    }

    clearMessage() {
        this.setState({
            chatMessage: ''
        })
    }

    pushChat(chat) {
        this.setState({
            chat: [chat, ...this.state.chat]
        })
    }
    
    render () {
        return (
            <div className="bg-black grow text-white p-3 flex flex-col">
                <div className={`flex justify-between`}>
                    <div className={`flex`}>
                        {
                            this.state.isOwner
                                ?
                                <div className={`flex`}>
                                    <div onClick={() => this.toggleLock()}>
                                        {
                                            this.props.isLocked 
                                            ?
                                                <FontAwesomeIcon title={`Unlock room`} icon={faLock} />
                                            :
                                                <FontAwesomeIcon title={`Lock room`} icon={faUnlock} />
                                        }
                                    </div>
                                </div>
                                :
                                ""
                        }
                    </div>

                    <p className="text-right">{ this.state.online } Online Now</p>
                </div>

                <div className={`flex flex-col flex-col-reverse grow mt-3`}>
                    <input
                        autoComplete={`off`}
                        value={this.state.chatMessage}
                        placeholder={`Type to chat...`}
                        type={`text`}
                        className={`w-full text-black p-3`}
                        onChange={e => this.setState({ chatMessage: e.target.value })}
                        onKeyUp={e => (e.code === 'Enter' || e.key === 'Enter') ? this.sendChat(e) : null}
                    />
                    {
                        this.state.chat.map(chat => {
                            return (
                                chat.isSystemMessage
                                    ?
                                    <div className={`my-3 flex justify-center`}>
                                        <span className={`text-white text-sm border-t border-b py-2`}>{chat.message}</span>
                                    </div>
                                    :
                                    <div className={`my-3 flex flex-col  ${chat.self ? 'items-end' : 'items-start'}`}>
                                        <p>{chat.name}</p>
                                        <p className={`p-3 ${chat.self ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}>{chat.message}</p>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Chat