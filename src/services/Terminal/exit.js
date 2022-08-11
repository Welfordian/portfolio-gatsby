import React from 'react';

class exit extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'exit';
        this.aliases = ['disconnect'];
    }

    handle(args, app) {
        return { 
            setState: {
                disconnected: true
            } 
        };
    }
}

export default new exit()