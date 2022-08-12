import React from 'react'
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";
import ls from '../services/Terminal/ls';
import clear from '../services/Terminal/clear';
import cd from '../services/Terminal/cd';
import open from '../services/Terminal/open';
import exit from '../services/Terminal/exit';
import whoami from '../services/Terminal/whoami';
import nano from '../services/Terminal/nano';
import sudo from '../services/Terminal/sudo';
import {graphql} from "gatsby";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/pro-solid-svg-icons";
import Modal from "../components/Modal";
import DefaultView from "../components/Terminal/Views/DefaultView";
import NanoView from "../components/Terminal/Views/NanoView";

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentView: 'default',
            modalOpen: false,
            disconnected: false,
            directory: '~',
            currentFile: null,
            
            dirListing: [
                {
                    name: 'home.webloc',
                    contents: '',
                    children: []
                },
                {
                    name: 'music.webloc',
                    contents: '',
                    children: []
                },
                {
                    name: 'resources.webloc',
                    contents: '',
                    children: []
                },
                {
                    name: 'resume.webloc',
                    contents: '',
                    children: []
                },
                {
                    name: 'blog',
                    children: this.props.data.allWpPost.edges.map(post => {
                        return {name: `${post.node.slug}.webloc`}
                    })
                },
                {
                    name: 'socials',
                    link: 'https://l.welford.me',
                    children: [
                        {
                            name: 'github.webloc',
                            link: 'https://link.welford.me/github'
                        },
                        {
                            name: 'linkedin.webloc',
                            link: 'https://link.welford.me/linkedin'
                        },
                        {
                            name: 'twitter.webloc',
                            link: 'https://link.welford.me/twitter'
                        },
                        {
                            name: 'instagram.webloc',
                            link: 'https://link.welford.me/instagram'
                        },
                        {
                            name: 'spotify.webloc',
                            link: 'https://link.welford.me/spotify'
                        },
                        {
                            name: 'lastfm.webloc',
                            link: 'https://link.welford.me/lastfm'
                        }
                    ]
                }
            ],
            
            commands: [
                cd,
                sudo,
                whoami,
                open,
                ls,
                clear,
                exit,
                nano
            ]
        }
    }

    render() {
        let view;
        
        let defaultView = <DefaultView
            onSetFile={file => this.setState({ currentFile: file })}
            onSetView={view => this.setState({ currentView: view })}
            onSetTitle={title => this.setState({ terminalTitle: title })}
            onDirectoryChange={directory => this.setState({ directory })}
            onDisconnect={disconnected => this.setState({ disconnected })}
            directory={this.state.directory}
            commands={this.state.commands}
            dirListing={this.state.dirListing}
            disconnected={this.state.disconnected}
        ></DefaultView>;
        
        let nanoView = <NanoView
            file={this.state.currentFile}
            directory={this.state.directory}
            dirListing={this.state.dirListing}
            onSetView={view => this.setState({ currentView: view })}
            onSetTitle={title => this.setState({ terminalTitle: title })}
        ></NanoView>;
        
        if (this.state.currentView === 'default') view = defaultView;
        if (this.state.currentView === 'nano') view = nanoView;
        
        return (
            <Layout hideSocial hideTagline>
                <div className={`flex justify-center grow`}>
                    <div className={`max-h-[43rem] flex flex-col rounded-lg shadow-xl shadow-gray-400 w-full md:w-4/5`}>
                        <div className="flex items-center h-6 justify-between rounded-t-lg bg-gray-600 border-b border-gray-500 text-center text-black">
                            <div className={`flex`}>
                                <div className="flex ml-2 justify-center items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3">
                                    {
                                        this.state.currentView === 'nano'
                                        ?
                                            <div className="flex items-center text-center bg-[#8C1A11] shadow-inner rounded-full w-1 h-1"></div>
                                        : ""    
                                    }
                                </div>
                                <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
                                <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
                            </div>

                            <div className="mx-auto select-none">
                                {
                                    this.state.currentView === 'default'
                                    ?
                                        <p className="text-center text-gray-300 text-sm">josh@welford.me: {this.state.directory}</p>
                                    :
                                        <p className="text-center text-gray-300 text-sm">{this.state.terminalTitle}</p>    
                                }
                            </div>
                            
                            <div>
                                <FontAwesomeIcon 
                                    onClick={() => this.setState({ modalOpen: true })}
                                    className={`text-white mr-2 cursor-pointer`}
                                    icon={faQuestionCircle}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`relative grow flex flex-col bg-black text-white overflow-y-scroll rounded-b-lg px-2 py-1`}>
                            {
                                view
                            }
                            
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