import React from 'react';

class JurassicPark extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'access';
        this.aliases = [];
    }

    handle(args, app) {
        if (args[0] === 'access' && args[1] === 'main' && args[2] === 'security' && args[3] === 'grid') {
            return {
                setTitle: 'access',
                setView: 'jurassic-park',
                output: `access: PERMISSION DENIED....and...`
            };
        }

        return {
            output: `access: PERMISSION DENIED.`
        };
    }
}

export default new JurassicPark()