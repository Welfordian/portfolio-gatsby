import React from 'react';
import {isBrowser} from "../../../services/auth";

class PingView extends React.Component {
    constructor(props) {
        super(props);
        
        this.abortFetch = false;

        this.handleKeyUp = e => {
            if (
                (e.code === 'KeyC' || e.key === 'KeyC')
                && e.ctrlKey
            ) {
                this.props.onSetView('default');

                return;
            }
        }

        this.state = {
            output: [...this.props.output],
        }
    }
    
    sendOutput(output = '') {
        this.setState({
            output: [...this.state.output, {
                isSystem: true,
                directory: this.props.directory,
                output: [output],
            }]
        }, () => {
            this.props.onOutput(this.state.output);
        })
    }
    
    pingDomain(domain = '', timeout = false, times = 0) {
        let start_time = new Date().getTime();
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 5000);
        
        if (this.abortFetch) return;
        
        if (timeout) {            
            setTimeout(() => {                
                fetch(domain, {signal: controller.signal, mode: 'no-cors'}).then(() => {
                    if (times < 5) {
                        this.sendOutput(`64 bytes from ${domain}: icmp_seq=6 ttl=54 time=${(new Date().getTime() - start_time)} ms`);
                        
                        this.pingDomain(domain, true, (times + 1));
                    } else {
                        this.props.onSetView('default');
                    }
                }).catch(e => {
                    console.log(e);
                    let error = e.name === 'AbortError' ? 'Request timed out.' : `ping: cannot resolve ${domain}: Unknown host`
                    
                    if (times < 5) {
                        this.pingDomain(domain, true, (times + 1))
                    } else {
                        this.props.onSetView('default');
                    }
                    
                    this.sendOutput(error);
                })
            }, 800);
        } else {
            fetch(domain, {signal: controller.signal, mode: 'no-cors'}).then(() => {
                this.sendOutput(`64 bytes from ${domain}: icmp_seq=6 ttl=54 time=${(new Date().getTime() - start_time)} ms`);

                this.pingDomain(domain, true, (times + 1));
            }).catch(e => {
                let error = e.name === 'AbortError' ? 'Request timed out.' : `ping: cannot resolve ${domain}: Unknown host`
                
                if (times < 5) {
                    this.pingDomain(domain, true, (times + 1));
                } else {
                    this.props.onSetView('default');
                }
                
                this.sendOutput(error);
            });
        }
    }

    componentDidMount() {
        let domain = this.props.file;
        
        if (! (domain.startsWith('https://')) || domain.startsWith('http://')) {
            domain = `https://${domain}`.replace('http://', '')
        }
        
        this.pingDomain(domain);
        
        document.addEventListener('keyup', this.handleKeyUp, false)
    }

    componentWillUnmount() {
        this.abortFetch = true
        
        document.removeEventListener('keyup', this.handleKeyUp, false)
    }

    render () {
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

export default PingView