import React from 'react';

class Twitter extends React.Component {
    constructor(props) {
        super(props);
        
        this.title = 'Twitter'
        
        this.icon = 'https://abs.twimg.com/favicons/twitter.2.ico'
        
        this.aliases = [
            'twitter.com',
            'www.twitter.com',
            'https://twitter.com',
            'https://www.twitter.com',
        ]
    }

    render() {
        return (
            <div className={`p-3`}>
                <h1>This is Twitter!</h1>
            </div>
        );
    }
}

export default Twitter