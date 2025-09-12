import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import App from "../components/SpotifyPlayer/App";
import {Helmet} from "react-helmet";

const isBrowser = typeof window !== "undefined"

class SpotifyPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: Cookies.get('spotifyAuthToken'),
        }
    }

    gotToken(token) {
        this.setState({ token })

        if (isBrowser) {
            window.location.hash = '';
        }
    }

    render() {
        return (
            <div className={`mt-32`}>
                {this.state.token ? (
                    <SpotifyApiContext.Provider value={this.state.token}>
                        <div className={`flex justify-center`}>
                            <App token={this.state.token} />
                        </div>
                    </SpotifyApiContext.Provider>
                ) : (
                    // Display the login page
                    <div className="flex justify-center mt-12">
                        <SpotifyAuth
                            redirectUri='https://welford.me/spotify-player/'
                            clientID='6d08c3a931c74f95813b4f181ef0ad50'
                            scopes={[Scopes.userReadPrivate, Scopes.userReadEmail, Scopes.streaming]}
                            title={"Connect to Spotify"}
                            logoClassName={"w-8 mr-8 fill-current text-white"}
                            btnClassName={"flex bg-black text-white items-center px-8 py-3 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-gray-700 dark:to-gray-900"}
                            onAccessToken={token => {this.gotToken(token)}}
                        />
                    </div>
                )}

                <Helmet
                    htmlAttributes={{
                        class: 'links-page',
                    }}
                />
            </div>
        );
    }
}

export default SpotifyPlayer;