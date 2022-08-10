import EventBus from "./EventBus";

export default class EventHandler {
    constructor(app, socket) {
        this.app = app;
        this.socket = socket;
        
        this.connect();
        this.disconnect();
        
        this.socket.onAny((event, args) => {            
            if (event in this) {
                this[event](args);
            }
        });
    }
    
    connect() {
        this.socket.on('connect', () => {
            this.app.setState({ connected: true });
        });
    }
    
    disconnect() {
        this.socket.on('disconnect', () => {
            this.app.setState({ connected: false });
        });
    }
    
    set_video_id({id}) {
        EventBus.emit('set_video_id', {id});
    }
    
    cmd_clear_chat() {
        EventBus.emit('cmd_clear_chat');
    }
    
    initial_response({time, owner, socketId, videoId, users}) {
        let isOwner = owner === socketId;
        EventBus.emit('initial_response', {isOwner, time, owner, socketId, videoId, users});
    }
    
    system_message(chat) {
        EventBus.emit('receive_chat', {isSystemMessage: true, ...chat});
    }
    
    chat_message(chat) {
        EventBus.emit('receive_chat', chat);
    }
    
    disconnect_reason({reason}) {
        alert(reason);
    }
    
    set_video_time(time) {
        EventBus.emit('set_video_time', time);
    }
    
    presence_update_join({owner, socketId, videoId, users}) {
        EventBus.emit('presence_update', { online: Object.keys(users).length });
    }
    
    presence_update_leave({videoId, users}) {
        EventBus.emit('presence_update', { online: Object.keys(users).length });
    }
}