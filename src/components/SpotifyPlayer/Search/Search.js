import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            searchTimeout: setTimeout.prototype,
            results: []
        }
    }
    
    render () {
        return (
            <div className="w-full border-b border-gray-600 relative">
                <input value={this.state.searchText} type="text" className="bg-black text-white p-2 outline-none w-full pr-9 rounded-none" placeholder="Search..." onChange={e => this.setState({searchText: (e.target.value)})} onKeyUp={(e) => this.performSearch(e)} />
                <FontAwesomeIcon icon={faSearch} className="absolute right-0 text-white mt-3 mr-3" />
                
                <div className={`absolute bg-gray-900 w-full px-2 py-3 text-white ${this.state.results.length ? '' : 'hidden'}`}>
                    {
                        this.state.results.map((result, index) => {
                            return (
                                <div className={`ml-2 cursor-pointer ${index === 0 ? '' : 'mt-2'}`} key={result.id} onClick={() => this.playSong(result)}>
                                    <div className="flex">
                                        <img src={result.album.images[0].url} className="w-16" />
                                        
                                        <div className="ml-2 flex flex-col justify-between items-between">
                                            <p>{result.name}</p>
                                            <p>{result.artists[0].name}</p>
                                            <p>{moment.duration(result.duration_ms, "milliseconds").format()}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
    
    playSong(track) {
        this.state.searchText = "";
        
        axios.put('https://api.spotify.com/v1/me/player/play?' + this.props.deviceId, {
            uris: [track.uri]
        }, {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        })
        
        this.setState({
            results: []
        });
    }
    
    performSearch(e) {
        clearTimeout(this.state.searchTimeout);
        
        if (e.target.value.trim().length === 0) {
            this.setState({
                results: []
            });
            
            return;
        }
        
        this.state.searchTimeout = setTimeout(() => {
            axios.get(`https://api.spotify.com/v1/search?q=${e.target.value}&type=track&limit=5`, {
                headers: {
                    Authorization: `Bearer ${this.props.token}`
                }
            }).then(r => {
                this.setState({
                    results: r.data.tracks.items
                });
            });
        }, 550);
    }
}

export default Search