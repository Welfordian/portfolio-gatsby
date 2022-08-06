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
        
        this.app.setState({ searchTerm: "", videoId: id });
    }
    
    updateTime(time) {
        this.socket.emit('set_video_time', {time});
    }
}