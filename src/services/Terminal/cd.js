import React from 'react';

class cd extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'cd';
        this.aliases = [];
    }

    handle(args, app) {
        let regexp = /..\/(.*)/;
        let dir = args[1];
        let dirListing = app.state.dirListing;
        
        if (regexp.test(dir)) {
            dir = regexp.exec(dir)[1];
        }
        
        if (dir === '.') {
            return { output: '' }
        }
        
        if (dir === '..' || dir === '...' || dir === '~' || dir === '/') {
            return {
                output: '',
                setDirectory: '~'
            }
        }

        let foundItem = dirListing.find(item => {
            return item.name === dir;
        })

        if (foundItem !== undefined) {
            if (foundItem.children.length > 0) {
                return { output: '', setDirectory: dir };
            }

            return {
                output: `cd: not a directory: ${dir}`
            };
        }

        return {
            output: `d: no such file or directory: ${dir}`
        };
    }
}

export default new cd()