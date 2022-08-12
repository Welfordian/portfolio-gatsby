import React from 'react';

class echo extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'echo';
        this.aliases = [];
    }

    handle(args, app) {
        let string = args.splice(1).join(' ').replace(/\"/g, '');
        
        return {
            output: string
        }
    }
}

export default new echo()