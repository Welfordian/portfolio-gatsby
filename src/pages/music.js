import React from "react";
import axios from "axios";
import "react-activity/dist/Levels.css";
import Tracks from "../components/Music/Tracks";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import TracksSkeleton from "../components/Music/TracksSkeleton";
import SocialLinks from "../components/SocialLinks";

class Music extends React.Component {
    componentDidMount() {
        const {tracks} = this.props;
        const {lastFmTracksLoaded} = this.props;

        if (! tracks.length) {
            axios.get('https://api.welford.me/spotify/recent').then((r) => {
                lastFmTracksLoaded(r.data);
            });
        }
    }

    render () {
        return (
            <>
                <SocialLinks />
                
                <p className="text-4xl mt-24">Recently Played</p>

                {
                    this.props.tracks.length
                        ? <Tracks tracks={this.props.tracks} />
                        : <TracksSkeleton count={24}></TracksSkeleton>
                }
            </>
        );
    }
}

const mapStateToProps = ({tracks}) => {
    return { tracks }
}
const mapDispatchToProps = dispatch => {
    return { lastFmTracksLoaded: (tracks) => dispatch({ type: `LASTFM_TRACKS_LOADED`, tracks }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);