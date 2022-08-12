import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Layout from "../components/Layout";
import App from "../components/Youtify/app";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync} from "@fortawesome/pro-solid-svg-icons";

const isBrowser = typeof window !== "undefined"

class Youtify extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: Cookies.get('spotifyAuthToken'),
            playlist: isBrowser ? (window.location.pathname.replace('/youtify/','').length > 0 ? window.location.pathname.replace('/youtify/','') : null) : null,
        }
    }

    gotToken(token) {
        this.setState({ token })

        if (isBrowser) {
            window.location.hash = '';
        }
    }

    render () {
        return (
            <Layout>
                {this.state.token || this.state.playlist ? (
                    <SpotifyApiContext.Provider value={this.state.token}>
                        <App token={this.state.token} />
                    </SpotifyApiContext.Provider>
                ) : (
                    <div className="flex flex-col items-center justify-center mt-12">                        
                        <SpotifyAuth
                            redirectUri='https://welford.me/youtify/'
                            clientID='6d08c3a931c74f95813b4f181ef0ad50'
                            scopes={[Scopes.userReadPrivate, 'user-read-email']}
                            title={"Connect to Spotify"}
                            logoClassName={"w-8 mr-8 fill-current text-white"}
                            btnClassName={"flex bg-black text-white items-center px-8 py-3 w-full md:w-2/4 lg:w-1/4 text-center justify-center"}
                            onAccessToken={token => {this.gotToken(token)}}
                        />

                        <div className="mt-4 w-full md:w-2/4 lg:w-1/4 right-0 md:ml-0 p-4 md:mb-4 bg-opacity-90 bg-gray-700 shadow shadow-current shadow-md" role="alert">
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Info</span>
                                <h3 className="text-lg font-medium text-white">YouTube Quota</h3>
                            </div>
                            <div className="mt-2 text-sm text-white">
                                The YouTube API is awful. Use a small playlist to avoid hitting the quota.
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        );
    }
}

export default Youtify;