import React from 'react';

class whoami extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'whoami';
        this.aliases = [];
    }

    handle(args, app) {
        return { output: 'josh' };
    }
}

export default new whoami()