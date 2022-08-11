import React from 'react'
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";
import ls from '../services/Terminal/ls';
import clear from '../services/Terminal/clear';
import cd from '../services/Terminal/cd';
import open from '../services/Terminal/open';
import exit from '../services/Terminal/exit';
import whoami from '../services/Terminal/whoami';
import sudo from '../services/Terminal/sudo';
import moment from "moment";
import {graphql} from "gatsby";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/pro-solid-svg-icons";
import Modal from "../components/Modal";

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalOpen: false,
            disconnected: false,
            directory: '~',
            currentInput: '',
            
            dirListing: [
                {
                    name: 'home.lnk',
                    children: []
                },
                {
                    name: 'music.lnk',
                    children: []
                },
                {
                    name: 'resources.lnk',
                    children: []
                },
                {
                    name: 'resume.lnk',
                    children: []
                },
                {
                    name: 'blog',
                    children: this.props.data.allWpPost.edges.map(post => {
                        return {name: `${post.node.slug}.lnk`}
                    })
                },
                {
                    name: 'socials',
                    link: 'https://l.welford.me',
                    children: [
                        {
                            name: 'github.lnk',
                            link: 'https://link.welford.me/github'
                        },
                        {
                            name: 'linkedin.lnk',
                            link: 'https://link.welford.me/linkedin'
                        },
                        {
                            name: 'twitter.lnk',
                            link: 'https://link.welford.me/twitter'
                        },
                        {
                            name: 'instagram.lnk',
                            link: 'https://link.welford.me/instagram'
                        },
                        {
                            name: 'spotify.lnk',
                            link: 'https://link.welford.me/spotify'
                        },
                        {
                            name: 'lastfm.lnk',
                            link: 'https://link.welford.me/lastfm'
                        }
                    ]
                }
            ],
            
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
            
            commands: [
                cd,
                sudo,
                whoami,
                open,
                ls,
                clear,
                exit
            ]
        }

        this.terminalInput = React.createRef();
    }
    
    componentDidMount() {
        this.terminalInput.current.focus();
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
            directory: this.state.directory,
            input: this.state.currentInput,
            output: [``],
        };
        
        this.setState({
            output: [...this.state.output, output]
        });

        this.resetInput();
    }
    
    handleAutoComplete(e) {
        e.preventDefault();
        
        let parts = this.state.currentInput.split(' ');
        
        let dirListing = this.state.directory === '~' ? this.state.dirListing : this.state.dirListing.find(item => {
            return item.name === this.state.directory;
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
            directory: this.state.directory,
            input: this.state.currentInput,
            output: [`zsh: command not found: ${parts[0]}`],
        };
        
        let foundCommand = this.state.commands.find(command => {
            return command.signature === parts[0] || command.aliases.indexOf(parts[0]) !== -1;
        });
        
        if (foundCommand) {
            commandOutput = foundCommand.handle(parts, this);
            output.output[0] = commandOutput.output;
        }
        
        if ('setState' in commandOutput) {
            this.setState(commandOutput.setState);
        }
        
        if ('setDirectory' in commandOutput) {
            this.setState({
                directory: commandOutput.setDirectory
            })
        }
        
        if (! ('preventDefault' in commandOutput)) {
            this.setState({
                output: [...this.state.output, output]
            })
        }
        
        this.resetInput();
    }

    render() {
        return (
            <Layout hideSocial hideTagline>
                <div className={`flex justify-center grow`}>
                    <div className={`max-h-[43rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 w-full md:w-4/5`}>
                        <div className="flex items-center h-6 justify-between rounded-t-lg bg-gray-600 border-b border-gray-500 text-center text-black">
                            <div className={`flex`}>
                                <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
                                <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
                                <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
                            </div>

                            <div className="mx-auto select-none">
                                <p className="text-center text-gray-300 text-sm">josh@welford.me: ~</p>
                            </div>
                            
                            <div>
                                <FontAwesomeIcon 
                                    onClick={() => this.setState({ modalOpen: true })}
                                    className={`text-white mr-2 cursor-pointer`}
                                    icon={faQuestionCircle}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`relative grow flex flex-col bg-black text-white overflow-y-scroll rounded-b-lg px-2 py-1 ${this.state.disconnected ? '' : 'cursor-text'}`} onClick={() => this.focusInput()}>
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
                                    <span className={`text-blue-400`}>{this.state.directory}</span>
                                </span>
                                <input
                                    disabled={this.state.disconnected}
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

                            <div className={`absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 ${this.state.disconnected ? '' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                    <div className="relative bg-gray-800 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                        <div className="px-4 pt-5 pb-5 sm:p-6 sm:pb-6">
                                            <div className="sm:flex sm:items-start flex-grow">
                                                <div className="mt-3 text-center sm:mt-0 sm:text-left flex-grow">
                                                    <h3 className="select-none text-xl leading-6 font-medium text-gray-200 text-center my-4" id="modal-title">Session Terminated</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    title="Available commands"
                    open={this.state.modalOpen}
                    buttons={[
                        <button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.setState({ modalOpen: false })}>Close</button>
                    ]}
                >
                    {
                        this.state.commands.map(command => {
                            return (
                                <p className={`text-white`}>
                                    {command.signature}

                                    {
                                        command.aliases.length > 0
                                            ?
                                            ` (aliases: ${command.aliases.map(alias => {
                                                return alias
                                            }).join(', ')})`
                                            :
                                            ''
                                    }
                                </p>
                            )
                        })
                    }
                </Modal>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            nodes {
              name
              id
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = ({posts}) => {
    return { posts }
}

export default connect(mapStateToProps)(Terminal);