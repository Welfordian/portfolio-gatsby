import React from "react";
import Track from "./Track";
import axios from "axios";
import TracksSkeleton from "./TracksSkeleton";
import Spinner from '../../images/Spinner.svg'
import NowPlaying from "../NowPlaying";
import Search from "./Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/pro-light-svg-icons";

export default class Tracks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            tracks: [],
            search: '',
            loadingMore: false,
            canLoadMore: true,
            hasResults: true,
            searchTimeout: setTimeout.prototype
        }
        
        this.container = React.createRef();
    }

    componentDidMount() {
        if (! this.props.tracks.length) {
            this.loadTracks(true);
        }
    }

    loadTracks(clearState = false) {        
        this.setState({ isLoadingMore: true })

        axios.get(`https://api.welford.me/spotify/recent?limit=19&page=${this.state.page}&search=${this.state.search}`).then((r) => {
            this.props.onLoad(r.data.data, clearState);

            this.setState({
                page: this.state.page + 1,
                hasResults: r.data.data.length > 0,
                loadingSearch: false,
                canLoadMore: r.data.next_page_url !== null,
            })

            this.setState({ isLoadingMore: false })
        });
    }
    
    performSearch(val) {
        this.setState({ search: val }, () => {
            clearTimeout(this.state.searchTimeout);
            
            this.setState({
                page: 1,
                searchTimeout: setTimeout(() => {
                    this.setState({ loadingSearch: true })
                    this.loadTracks(true);
                }, 850)
            })
        })
    }

    render () {
        return (
            <div className={`w-full ${this.props.className}`}>
                <div className={`flex flex-col md:flex-row justify-between`}>
                    <p className="text-4xl dark:text-gray-300">Recently Played</p>
                    
                    <div className={`relative`}>
                        <Search search={this.state.search} onChange={e => { this.performSearch(e) }} />

                        {
                            this.state.loadingSearch
                            ?
                                <FontAwesomeIcon size={`lg`} icon={faSpinner} className={`dark:text-gray-300 fa-spin absolute right-[.5em] top-[.5em]`} />
                            : <></>    
                        }
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-between mt-3 gap-2" ref={this.container}>
                    <NowPlaying></NowPlaying>
                    {
                        this.props.tracks.length
                            ? this.props.tracks.map((track) => {
                                return (
                                    <Track track={track} />
                                );
                            })
                            : (this.state.hasResults ? <TracksSkeleton count={25}></TracksSkeleton> : <div><p>No results found.</p></div>)
                    }
                </div>
                
                <div className={`flex justify-center items-center mt-6`}>
                    {
                        this.state.canLoadMore
                        ?
                            <button
                                onClick={() => this.loadTracks()}
                                className={`bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 text-white px-3 py-4 w-36 justify-center flex`}
                            >
                                {
                                    this.state.isLoadingMore
                                        ?
                                        <Spinner className={`w-6 text-white`} />
                                        :
                                        <span>Load More</span>
                                }
                            </button>
                        : <></>    
                    }
                </div>
            </div>
        );
    }
}