import EventBus from './EventBus'

export default class EventEmitter {
    constructor(app, socket) {
        this.app = app;
        this.socket = socket;
    }
    
    disconnect() {
        this.socket.disconnect();
    }
    
    setVideo(id) {
        this.socket.emit('set_video_id', {id});
        EventBus.emit('set_video_id', {id});
    }

    sendChat(message) {
        this.socket.emit('send_chat', {message});
    }
    
    updateTime(time, emit = false) {
        this.socket.emit('set_video_time', {time, emit});
    }
}