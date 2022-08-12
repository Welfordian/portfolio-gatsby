import React from 'react';

class ping extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'ping';
        this.aliases = [];
    }

    handle(args, app) {
        let domain = args[1];
        
        if (domain === undefined) {
            return {
                output: `ping: host is required`
            }
        }
        
        return {
            setFile: domain,
            setTitle: `ping ${domain}`,
            setView: 'ping',
            output: ''
        }
    }
}

export default new ping()