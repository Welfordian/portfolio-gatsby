class EventBus {
    constructor() {
        this.watchers = {};
    }

    emit(eventName, data) {
        if (! eventName in this.watchers) return;
        
        this.watchers[eventName].forEach(fn => {
            fn(data);
        });
    }   
    
    on(eventName, callback) {
        if (! (eventName in this.watchers)) {
            this.watchers[eventName] = [];
        }
        
        this.watchers[eventName].push(callback);
    }
}

export default new EventBus