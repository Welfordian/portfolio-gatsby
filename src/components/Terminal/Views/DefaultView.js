import React from 'react';
import moment from "moment";
import { isBrowser } from "../../../services/auth";

class DefaultView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentInput: '',
            inputDisabled: false,
            output: this.props.output,
        }

        this.terminalInput = React.createRef();
    }

    componentDidMount() {
        this.focusInput();
        
        if (isBrowser()) {
            let search = window.location.search;
            
            if (search.startsWith('?command=')) {
                this.setState({ inputDisabled: true })
                this.autoTypeCommand(search.replace('?command=', ''))

                isBrowser() && window.history.pushState({}, '', '/terminal')
            }
        }
    }
    
    autoTypeCommand(command = "") {
        command = decodeURIComponent(command);
        
        let typingInterval = setInterval.prototype;
        let typingIndex = 0;
        
        typingInterval = setInterval(() => {
            if (typingIndex >= command.length) {
                clearInterval(typingInterval);
                this.setState({ inputDisabled: false })
                this.handleKeyDown({ code: 'Enter' })
                
                return;
            }
            
            this.setState({
                currentInput: `${this.state.currentInput}${command[typingIndex]}`
            })
            
            typingIndex++;
            
        }, 150);
    }

    focusInput() {
        this.terminalInput.current.focus();
    }

    resetInput() {
        this.setState({ currentInput: '' })
    }

    handleKeyDown(e) {
        if (e.code === 'Enter' || e.key === 'Enter') return this.handleCommand();
        if (e.code === 'Tab' || e.key === 'Tab') return this.handleAutoComplete(e);
        if ((e.code === 'KeyC' || e.key === 'KeyC') && e.ctrlKey) return this.sendEmptyOutput();
    }

    sendEmptyOutput() {
        let output = {
            directory: this.props.directory,
            input: this.state.currentInput,
            output: [``],
        };

        this.props.onDirectoryChange(this.props.directory);

        this.setState({
            output: [...this.state.output, output]
        });

        this.resetInput();
    }

    handleAutoComplete(e) {
        e.preventDefault();

        let parts = this.state.currentInput.split(' ');

        let dirListing = this.props.directory === '~' ? this.props.dirListing : this.props.dirListing.find(item => {
            return item.name === this.props.directory;
        })['children'];

        let foundItem = dirListing.find(item => {
            return item.name.startsWith(parts[1]);
        });

        if (! (foundItem === undefined)) {
            this.setState({
                currentInput: `${parts[0]} ${foundItem.name}`
            })
        }
    }

    async handleCommand() {
        let commandOutput = {};

        let parts = this.state.currentInput.split(' ');

        let output = {
            directory: this.props.directory,
            input: this.state.currentInput,
            output: [`zsh: command not found: ${parts[0]}`],
        };

        this.props.onDirectoryChange(this.props.directory);

        let foundCommand = this.props.commands.find(command => {
            return command.signature === parts[0] || command.aliases.indexOf(parts[0]) !== -1;
        });

        if (foundCommand) {
            commandOutput = foundCommand.handle(parts, this);   
            if ('bulk' in commandOutput) {
                await (new Promise((resolve, reject) => {
                    this.setState({
                        output: [...this.state.output, {
                            directory: '~',
                            input: this.state.currentInput,
                            output: ['']
                        }]
                    }, () => resolve());
                }))
                
                output = commandOutput.output;
            } else {
                output.output[0] = commandOutput.output;

                this.props.onHistory(parts.join(' '));
            }
        } else {
            this.props.onHistory(parts.join(' '));
        }

        if ('setDisconnected' in commandOutput) {
            this.props.onDisconnect(commandOutput.setDisconnected);
        }
        
        if ('setTitle' in commandOutput) {
            this.props.onSetTitle(commandOutput.setTitle)
        }

        if ('setFile' in commandOutput) {
            this.props.onSetFile(commandOutput.setFile);
        }

        if ('setState' in commandOutput) {
            this.setState(commandOutput.setState);
        }

        if ('setDirectory' in commandOutput) {
            this.props.onDirectoryChange(commandOutput.setDirectory);
        }

        if (! ('preventDefault' in commandOutput)) {
            if ('bulk' in commandOutput) {
                output = [...this.state.output, ...output]
            } else {
                output = [...this.state.output, output]
            }
            this.setState({
                output
            }, () => {
                this.props.onOutput(this.state.output);
                
                if ('setView' in commandOutput) {
                    this.props.onSetView(commandOutput.setView);
                }
            })
        }

        this.resetInput();
    }

    render () {
        return (
            <div onClick={() => this.focusInput()} className={`grow ${this.props.disconnected ? '' : 'cursor-text'}`}>
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

                <div className={`text-md flex items-center`}>
                                <span className={`flex gap-3 items-center select-none`}>
                                    <span className={`text-green-400`}>➜</span>
                                    <span className={`text-blue-400`}>{this.props.directory}</span>
                                </span>
                    <input
                        disabled={(this.props.disconnected || this.state.inputDisabled)}
                        ref={this.terminalInput}
                        value={this.state.currentInput}
                        onChange={e => this.setState({ currentInput: e.target.value })}
                        onKeyDown={e => this.handleKeyDown(e)}
                        autoComplete={`off`}
                        spellCheck={false}
                        type={`text`}
                        className={`text-sm grow pl-2 bg-black outline-none border-none`}
                    />
                </div>
            </div>
        )
    }
}

export default DefaultView