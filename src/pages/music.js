import React from "react";
import axios from "axios";
import { Levels } from "react-activity";
import "react-activity/dist/Levels.css";
import Tracks from "../components/Music/Tracks";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TracksSkeleton from "../components/Music/TracksSkeleton";

class Music extends React.Component {
    componentDidMount() {
        const {tracks} = this.props;
        const {lastFmTracksLoaded} = this.props;

        if (! tracks.length) {
            axios.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=cd1a599104643eed3f309d8376b4740d&format=json&limit=24').then((r) => {
                lastFmTracksLoaded(r.data.recenttracks.track);
            });
        }
    }

    render () {
        return (
            <Layout>
                <p className="text-4xl mt-24">Recently Played</p>

                {
                    this.props.tracks.length
                        ? <Tracks tracks={this.props.tracks} />
                        : <TracksSkeleton count={24}></TracksSkeleton>
                }
            </Layout>
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