import React from 'react';
const isBrowser = typeof window !== "undefined"

class open extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'open';
        this.aliases = ['cat', 'vim', 'vi', 'nano'];
    }

    handle(args, app) {
        let dirListing = app.state.directory === '~' ? app.state.dirListing : app.state.dirListing.find(item => {
            return item.name === app.state.directory;
        })['children'];
        
        let foundItem = dirListing.find(item => {
            return item.name === args[1];
        })
        
        if (foundItem !== undefined) {
            if (isBrowser) {
                let prefix = app.state.directory === '~' ? '/' : `/${app.state.directory}/`
                if (args[1] === 'home.lnk') args[1] = '';
                
                if (('link' in foundItem)) {
                    window.open(foundItem.link, '_blank');
                    
                    return { preventDefault: true};
                }

                window.location.href = `${prefix}${args[1].replace('.lnk', '')}`;
                
                return { preventDefault: true };
            }
        }
        
        return {
            output: `cd: no such file or directory: ${args[1]}`
        };
    }
}

export default new open()