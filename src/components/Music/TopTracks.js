import React from 'react'
import {connect} from "react-redux";
import axios from "axios";
import Track from "./Track";
import TracksSkeleton from "./TracksSkeleton";
import Dropdown from "../Dropdown";

class TopTracks extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            is_loading: false,
            time_periods: [
                'this_week',
                'this_month',
                'this_year',
                'all_time'
            ]
        }
    }
    
    componentDidMount() {
        if (! this.props.top_tracks.length) {
            this.loadTracks(true);
        }
    }

    loadTracks() {
        this.setState({
            is_loading: true,
        }, () => {
            axios.get('https://api.welford.me/tracks/analytics').then((r) => {
                this.props.topTracksLoaded(r.data['most_played'][this.props.top_tracks_time_period]);
                
                this.setState({
                    is_loading: false,
                })
            });
        })
    }
    
    setTimePeriod(time_period) {
        this.setState({
            time_period,
        }, () => {
            this.props.setTimePeriod(time_period);
            
            this.loadTracks();
        })
    }

    render() {
        return (
            <>
                <div className={`flex justify-between`}>
                    <p className="text-4xl dark:text-gray-300">Most Played</p>
                    
                    <Dropdown options={this.state.time_periods} initial={this.props.top_tracks_time_period} onSelect={option => this.setTimePeriod(option)}></Dropdown>
                </div>
                
                <div className="flex flex-wrap justify-between mt-3 gap-2">
                    {
                        this.props.top_tracks.length && ! (this.state.is_loading)
                            ? this.props.top_tracks.map((track) => {
                                return (
                                    <Track track={track} />
                                );
                            })
                            : <TracksSkeleton count={5}></TracksSkeleton>
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = ({top_tracks, top_tracks_time_period}) => {
    return { top_tracks, top_tracks_time_period }
}
const mapDispatchToProps = dispatch => {
    return { 
        topTracksLoaded: (top_tracks) => dispatch({ type: `TOP_TRACKS_LOADED`, top_tracks }),
        setTimePeriod: (time_period) => dispatch({ type: 'SET_TOP_TRACKS_TIME_PERIOD', time_period})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);