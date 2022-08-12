import React from 'react';

class exit extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'exit';
        this.aliases = ['disconnect'];
    }

    handle(args, app) {
        return { setDisconnected: true };
    }
}

export default new exit()