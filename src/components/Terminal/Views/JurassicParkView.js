import React from 'react';
import {isBrowser} from "../../../services/auth";

class JurassicParkView extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleKeyUp = e => {
            if (
                (e.code === 'KeyX' || e.key === 'KeyX')
                && e.ctrlKey
            ) {
                this.props.onSetView('default');

                return;
            }
        }

        this.state = {
            showGif: false,
            
            output: [...this.props.output],
        }
    }
    
    componentDidMount() {
        let outputInterval = setInterval.prototype;
        
        setTimeout(() => {
            setInterval(() => {
                if (this.state.output.length > 25) {
                    clearInterval(outputInterval);
                    
                    this.setState({
                        showGif: true,
                    })
                    
                    return;
                }
                
                this.setState({
                    output: [...this.state.output, {
                        isSystem: true,
                        directory: this.props.directory,
                        input: 'access main security grid',
                        output: [`YOU DIDN'T SAY THE MAGIC WORD!`],
                    }]
                })
            }, 100);
        }, 500);
        
        document.addEventListener('keyup', this.handleKeyUp, false)
    }
    
    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyUp, false)
    }

    render () {
        if (this.state.showGif) {
            setTimeout(() => {
                isBrowser() && document.querySelector('audio').play()
            }, 500)
            
            return (
                <div className={`flex grow items-center justify-center`}>
                    <img src={`/jurassic-park.gif`} />

                    <audio autoPlay={true} loop={true} preload={`auto`}>
                        <source src="/jurassic-park.wav" type="audio/wav" />
                    </audio>
                </div>
            )
        }
        
        return (
            <div className={`grow`}>
                {
                    this.state.output.map((output) => {
                        return (
                            <div className={`text-md flex flex-col items-start`}>
                                {
                                    ! ('isSystem' in output) ?
                                        <div className={`flex w-full items-center select-none`}>
                                                        <span className={`flex gap-3 items-center`}>
                                                            <span className={`text-green-400`}>➜</span>
                                                            <span className={`text-blue-400`}>{output.directory}</span>
                                                        </span>
                                            <p className={`text-sm grow pl-2`}>{output.input}</p>
                                        </div>
                                        :
                                        ''
                                }
                                <div>
                                    {
                                        output.output.map((cmdOutput) => {
                                            return (
                                                <div className={`text-sm grow select-none`}>{cmdOutput}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default JurassicParkView