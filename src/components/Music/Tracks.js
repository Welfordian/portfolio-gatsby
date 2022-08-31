import React from "react";
import Track from "./Track";
import axios from "axios";
import TracksSkeleton from "./TracksSkeleton";
import Spinner from '../../images/Spinner.svg'
import NowPlaying from "../NowPlaying";

export default class Tracks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            tracks: [],
            loadingMore: false,
        }
        
        this.container = React.createRef();
    }

    componentDidMount() {
        if (! this.props.tracks.length) {
            this.loadTracks(true);
        }

        // this.container.current.addEventListener('scroll', e => {
        //     let diff = Math.abs((this.container.current.scrollTop+this.container.current.clientHeight) - (this.container.current.scrollHeight));
        //    
        //     if (diff < 500) {
        //         this.loadMore = true;
        //
        //         this.loadTracks();
        //     } else {
        //         this.loadMore = false;
        //     }
        // });
    }

    loadTracks(force = false) {
        if (! force && this.state.isLoadingMore) return;
        
        this.setState({ isLoadingMore: true })

        axios.get('https://api.welford.me/spotify/recent?limit=19&page=' + this.state.page).then((r) => {
            this.props.onLoad(r.data.data);

            this.setState({
                page: this.state.page + 1,
            })

            this.setState({ isLoadingMore: false })
        });
    }

    render () {
        return (
            <div className={`w-full ${this.props.className}`}>
                <p className="text-4xl dark:text-gray-300">Recently Played</p>
                
                <div className="flex flex-wrap justify-between mt-3 gap-2" ref={this.container}>
                    <NowPlaying></NowPlaying>
                    {
                        this.props.tracks.length
                            ? this.props.tracks.map((track) => {
                                return (
                                    <Track track={track} />
                                );
                            })
                            : <TracksSkeleton count={25}></TracksSkeleton>
                    }
                </div>
                
                <div className={`flex justify-center items-center mt-6`}>
                    <button 
                        onClick={() => this.loadTracks()}
                        className={`bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 text-white px-3 py-4 w-36 justify-center flex`}
                    >
                        {
                            this.state.isLoadingMore
                            ?
                                <Spinner className={`w-6`} />
                            :
                                <span>Load More</span> 
                        }
                    </button>
                </div>
            </div>
        );
    }
}