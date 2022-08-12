import React from 'react';
import moment from "moment";

class DefaultView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            output: [
                {
                    isSystem: true,
                    input: '',
                    output: ['Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-88-generic x86_64)']
                },
                {
                    isSystem: true,
                    input: '',
                    output: ['*** System restart required ***']
                },
                {
                    isSystem: true,
                    input: '',
                    output: [`Last login: ${moment().subtract(1, 'hours').format('ddd MMM D HH:mm:ss YYYY')} from 1.1.1.1`]
                }
            ],
        }

        this.terminalInput = React.createRef();
    }

    componentDidMount() {
        this.focusInput();
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

    handleCommand() {
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
            output.output[0] = commandOutput.output;
        }

        if ('setDisconnected' in commandOutput) {
            this.props.onDisconnect(commandOutput.setDisconnected);
        }
        
        if ('setTitle' in commandOutput) {
            this.props.onSetTitle(commandOutput.setTitle)
        }
        
        if ('setView' in commandOutput) {
            this.props.onSetView(commandOutput.setView);
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
            this.setState({
                output: [...this.state.output, output]
            })
        }
        
        this.props.onOutput(this.state.output);

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
                        disabled={this.props.disconnected}
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