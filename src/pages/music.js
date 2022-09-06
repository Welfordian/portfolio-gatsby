import React from "react";
import "react-activity/dist/Levels.css";
import Tracks from "../components/Music/Tracks";
import {connect} from "react-redux";
import SpotifyPlaylist from "../components/Music/SpotifyPlaylist";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLastfm, faSpotify} from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import TopTracks from "../components/Music/TopTracks";

class Music extends React.Component {
    render () {
        return (
            <div>
                {/*<div className={`flex w-full lg:bg-gray-800 px-4 py-2 lg:-mt-10 pt-6 items-end justify-between`}>*/}
                {/*    <div className={`flex flex-col lg:flex-row items-center lg:items-end w-full`}>*/}
                {/*        <div className={`w-48 rounded-full border-4 border-gray-900 lg:-mb-20 hidden lg:block`}>*/}
                {/*            <img className={`rounded-full w-48`}*/}
                {/*                 src={`https://i.scdn.co/image/ab6775700000ee8582de32708aa90044fc597c38`} />*/}
                {/*        </div>*/}
                
                {/*        <div className={`justify-center flex flex-col items-center lg:items-start lg:ml-12 w-full lg:text-gray-300 mb-5`}>*/}
                {/*            <div className={`flex flex-col lg:flex-row lg:justify-between gap-3 items-center lg:items-end w-full`}>                                */}
                {/*                <div className={`md:w-1/2 lg:w-3/4 flex flex-col items-center lg:items-start`}>*/}
                {/*                    <p className={`text-4xl`}>Josh Welford</p>*/}
                {/*                    */}
                {/*                    <div className={`flex gap-3`}>*/}
                {/*                        <p className={`text-sm mt-3 flex items-center gap-2`}>*/}
                {/*                            <FontAwesomeIcon icon={faSpotify} />*/}
                
                {/*                            17 Followers*/}
                {/*                        </p>*/}
                
                {/*                        <p className={`text-sm mt-3 flex items-center gap-2`}>*/}
                {/*                            <FontAwesomeIcon icon={faLastfm} />*/}
                
                {/*                            110 Followers*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                */}
                {/*                <div className={`grow gap-2 flex flex-col w-full md:w-1/2 lg:w-1/4 justify-center`}>*/}
                {/*                    <a href="https://link.welford.me/spotify" target="_blank" rel="noopener"*/}
                {/*                       className={`w-3/4 md:w-full lg:w-full self-center mx-auto bg-green-500 hover:bg-green-600 transition-colors text-white py-3 gap-3 flex justify-center items-center`}*/}
                {/*                    >*/}
                {/*                        <FontAwesomeIcon icon={faSpotify} />*/}
                
                {/*                        Follow on Spotify*/}
                {/*                    </a>*/}
                
                {/*                    <a href="https://link.welford.me/lastfm" target="_blank" rel="noopener"*/}
                {/*                       className={`w-3/4 md:w-full lg:w-full mx-auto bg-red-500 hover:bg-red-600 transition-colors text-white py-3 gap-3 flex justify-center items-center`}*/}
                {/*                    >*/}
                {/*                        <FontAwesomeIcon icon={faLastfm} className={`-ml-2.5`} />*/}
                
                {/*                        Follow on LastFM*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    */}
                {/*    <div>*/}
                {/*        */}
                {/*    </div>*/}
                {/*</div>*/}
                
                <SocialLinks />
                
                <div className="mt-24 gap-12">
                    <TopTracks></TopTracks>
                    
                    <Tracks className={`mt-12`} tracks={this.props.tracks} onLoad={this.props.lastFmTracksLoaded} />
                    
                    <div className={`w-full mt-12`}>
                        <p className="text-4xl dark:text-gray-300">Playlists</p>
                        
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-3`}>
                            <SpotifyPlaylist playlist="6e8oMgHsl4V4jcw9lhQ9mj" title="A Chill Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="7ji8f9PubYla3q652Yz6n4" title="A Poppy Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="6YXFiifYX1ItKtimFesUNJ" title="A Bouncy Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="5NF6WIrvfy8cWpdfaoh2au" title="A Lucid Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="5YyO8lDKAh2siTh2EDcwYl" title="A Byers Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="2n96PioY2RL0GriBf8VcTK" title="A Dirt Road Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="7qU5YlXlr1hQdLK8hFeWxs" title="A Special Vibe Playlist"></SpotifyPlaylist>
                            <SpotifyPlaylist playlist="336VFONhuhd44C09b1xntQ" title="A Rocky Vibe Playlist"></SpotifyPlaylist>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tracks}) => {
    return { tracks }
}
const mapDispatchToProps = dispatch => {
    return { lastFmTracksLoaded: (tracks, clearState) => dispatch({ type: `LASTFM_TRACKS_LOADED`, tracks, clearState }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);