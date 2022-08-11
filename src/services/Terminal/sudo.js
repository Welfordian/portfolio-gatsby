import React from 'react';

class sudo extends React.Component {
    constructor(props) {
        super(props);

        this.signature = 'sudo';
        this.aliases = [];
    }

    handle(args, app) {
        let defaultOutput = `
            <pre>usage: sudo -h | -K | -k | -V
usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]
usage: sudo [-AbEHknPS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] [VAR=value] [-i|-s]
usage: sudo -e [-AknS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] file ...</pre>
        `;
        
        if (args.length === 1) {
            return {
                output: (
                    <p dangerouslySetInnerHTML={{__html: defaultOutput}}></p>
                )
            }
        }
        
        return {
            output: (
                <p>Username is not in the sudoers file. This incident will be reported.</p>
            )
        }
    }
}

export default new sudo()