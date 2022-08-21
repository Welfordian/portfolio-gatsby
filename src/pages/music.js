import React from "react";
import axios from "axios";
import "react-activity/dist/Levels.css";
import Tracks from "../components/Music/Tracks";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import TracksSkeleton from "../components/Music/TracksSkeleton";
import SocialLinks from "../components/SocialLinks";

class Music extends React.Component {    
    constructor(props) {
        super(props);
        
        this.state = {
            page: 1,
        }
        
        this.isLoadingMore = false;
        this.loadMore = false;
    }

    componentDidMount() {
        const {tracks} = this.props;

        if (! tracks.length) {
            this.loadTracks(true);
        }

        window.addEventListener('scroll', e => {
            const scrollY = window.scrollY + window.innerHeight + 2;
            const bodyScroll = document.body.offsetHeight;

            if (scrollY >= (bodyScroll - 750)) {
                this.loadMore = true;

                this.loadTracks();
            } else {
                this.loadMore = false;
            }
        });
    }
    
    loadTracks(force = false) {
        const {lastFmTracksLoaded} = this.props;
        
        if ((! force && ! (this.loadMore)) || this.isLoadingMore) return;
        
        this.loadMore = false;
        this.isLoadingMore = true;
        
        axios.get('https://api.welford.me/spotify/recent?page=' + this.state.page).then((r) => {
            lastFmTracksLoaded(r.data.data);

            this.setState({
                page: this.state.page + 1
            })
            
            this.isLoadingMore = false;
        });
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