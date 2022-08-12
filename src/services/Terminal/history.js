import React from 'react';

class history extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'history';
        this.aliases = [];
    }

    handle(args, app) {
        if (args[1] === '-c') {
            return {
                output: 'History file deleted. Reload the session to see its effects.'
            }
        }
        
        let history = app.props.history.map(h => {
            return {
                isSystem: true,
                directory: '~',
                input: 'history',
                output: [h]
            }
        });
        
        console.log([...app.props.output, ...history]);

        return { bulk: true, output: history };
    }
}

export default new history()