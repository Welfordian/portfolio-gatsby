import React from 'react';

class Nano extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'nano';
        this.aliases = [];
    }

    handle(args, app) {
        let dirListing = app.props.directory === '~' ? app.props.dirListing : app.props.dirListing.find(item => {
            return item.name === app.props.directory;
        })['children'];

        let foundItem = dirListing.find(item => {
            return item.name === args[1];
        })
        
        if (foundItem === undefined) {
            return {
                output: `nano: no such file or directory: ${args[1]}`
            };
        }
        
        return { setView: 'nano', setFile: args[1] };
    }
}

export default new Nano()