import React from 'react';
import {Link} from "gatsby";

class Navigation extends React.Component {
    render () {
        return (
            <div className={`flex flex-col h-full`}>
                {this.props.children}
                
                <div className="flex flex-col h-full bg-black/80">
                    <Link to={"posts"} className={`px-6 py-4 bg-gray-500 hover:bg-gray-400`}>Posts</Link>
                </div>
            </div>
        )
    }
}

export default Navigation