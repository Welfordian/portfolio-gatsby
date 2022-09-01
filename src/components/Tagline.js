import React from "react";
import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

export default class Tagline extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phrases: [
                'Laravel',
                'React',
                'Vue',
                'Linux',
                'Cloudflare',
            ]
        } 
    }
    
    render () {
        return (
            <div className="text-center mt-6 skills-ticker text-2xl dark:text-gray-300">
                <TextScrambler
                    phrases={this.state.phrases}
                    speed={20}
                    pauseTime={1500}
                />
            </div>
            
        );
    }
}