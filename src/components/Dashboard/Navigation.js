import React from 'react';
// Replaced Gatsby Link with standard anchor for Astro routing

class Navigation extends React.Component {
    render () {
        return (
            <div className={`flex flex-col h-full`}>
                {this.props.children}
                
                <div className="flex flex-col h-full bg-black/80">
                    <a href={"/dashboard/posts"} className={`px-6 py-4 bg-gray-500 hover:bg-gray-400`}>Posts</a>
                </div>
            </div>
        )
    }
}

export default Navigation