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
    
    initial_response({time, owner, socketId, videoId, users}) {
        if (owner === socketId) {
            this.app.startUpdateInterval();
        }
        
        this.app.setState({ startTime: time, videoId, online: Object.keys(users).length })
    }
    
    presence_update_join({owner, socketId, videoId, users}) {        
        this.app.setState({ online: Object.keys(users).length })
    }
    
    presence_update_leave({videoId, users}) {
        this.app.setState({ online: Object.keys(users).length })
    }
}