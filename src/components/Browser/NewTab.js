import React from 'react'

class NewTab extends React.Component {
    constructor(props) {
        super(props);

        this.title = 'New Tab'
        
        this.icon = 'https://assets.msn.com/statics/icons/favicon_newtabpage.png'
        
        this.aliases = [
            'jw://newtab',
        ]
    }

    render() {
        return (
            <div className="grow flex-col flex justify-center items-center -mt-6">
                <h1 className="text-3xl md:text-5xl text-center">New Tab</h1>

                <p className={`pt-12 text-center`}>Here's a list of your recently visited sites</p>

                <div className="flex flex-wrap justify-center mt-12 gap-3">
                    <div onClick={() => { this.props.onNavigate('https://facebook.com')}} className={`px-5 py-3 cursor-pointer text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center hover:shadow-md hover:shadow-black/40 block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300`}>
                        Facebook
                    </div>

                    <div onClick={() => { this.props.onNavigate('https://twitter.com') }} className={`px-5 py-3 cursor-pointer text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center hover:shadow-md hover:shadow-black/40 block lg:mt-0 hover:text-white hover:bg-gray-800 hover:text-white font-bold transition duration-300 dark:text-gray-300`}>
                        Twitter
                    </div>

                    <div className={`px-5 py-3 cursor-not-allowed text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center block lg:mt-0 font-bold transition duration-300 dark:text-gray-300`}>
                        Google
                    </div>

                    <div className={`px-5 py-3 cursor-not-allowed text-gray-500' border-2 border-black w-full md:w-auto flex justify-center items-center block lg:mt-0 font-bold transition duration-300 dark:text-gray-300`}>
                        BBC News
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTab