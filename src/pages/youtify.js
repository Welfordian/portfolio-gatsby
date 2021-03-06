import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Layout from "../components/Layout";
import App from "../components/Youtify/app";

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
                    // Display the login page
                    <div className="flex justify-center mt-12">
                        <SpotifyAuth
                            redirectUri='https://welford.me/youtify/'
                            clientID='6d08c3a931c74f95813b4f181ef0ad50'
                            scopes={[Scopes.userReadPrivate, 'user-read-email']}
                            title={"Connect to Spotify"}
                            logoClassName={"w-8 mr-8 fill-current text-white"}
                            btnClassName={"flex bg-black text-white items-center px-8 py-3"}
                            onAccessToken={token => {this.gotToken(token)}}
                        />
                    </div>
                )}
            </Layout>
        );
    }
}

export default Youtify;