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