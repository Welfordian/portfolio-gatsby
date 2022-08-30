import React from 'react'

class Facebook extends React.Component {
    constructor(props) {
        super(props);
        
        this.title = 'Facebook'
        
        this.icon = 'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico'

        this.aliases = [
            'facebook.com',
            'www.facebook.com',
            'https://facebook.com',
            'https://www.facebook.com',
        ]
    }

    render() {
        return (
            <div className={`p-3`}>
                <h1>This is Facebook!</h1>
            </div>
        );
    }
}

export default Facebook