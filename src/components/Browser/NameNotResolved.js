import React from 'react'

class NameNotResolved extends React.Component {
    constructor(props) {
        super(props);

        this.title = 'New Tab'

        this.icon = 'https://assets.msn.com/statics/icons/favicon_newtabpage.png'

        this.aliases = [
            'jw://err_name_not_resolved',
        ]
    }

    render() {
        return (
            <div className="grow flex-col flex justify-center items-center -mt-6">
                <div>
                    <h1 className="text-2xl">Hmmm... can't reach this page</h1>

                    <p className={`mt-8`}>{this.props.url}'s server IP address could not be found.</p>
                    
                    <p className={`font-bold mt-8`}>Try:</p>
                    
                    <ul className={`list-disc ml-4 mt-6 flex flex-col gap-3`}>
                        <li>Checking the connection</li>
                        <li>Checking the proxy, firewall, and DNS settings.</li>
                    </ul>
                    
                    <p className={`text-gray-400 mt-12 text-sm`}>ERR_NAME_NOT_RESOLVED</p>
                </div>
            </div>
        );
    }
}

export default NameNotResolved