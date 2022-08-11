import React from 'react';

class clear extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'clear';
        this.aliases = ['clr'];
    }

    handle(args, app) {
        app.setState({output: []});
        
        return { preventDefault: true };
    }
}

export default new clear()