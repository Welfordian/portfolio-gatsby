import React from 'react'
import axios from 'axios'
import {connect} from "react-redux";

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            artists: [],
            artistMatch: '',
        }
    }

    componentDidMount() {
        if (! this.state.artists.length) {
            this.loadArtists()
        }
    }

    loadArtists() {
        axios.get('https://api.welford.me/tracks/artists').then(r => {
            this.props.artistsLoaded(r.data);
        })
    }

    filterArtists(search) {
        this.setState({
            search
        }, () => {
            this.placeholder();
            this.props.onChange(search)
        })
    }

    placeholder() {
        if (this.state.search.trim().length > 0) {
            let filtered = this.props.artists.filter((artist) => {
                return artist.toLowerCase().startsWith(this.state.search.toLowerCase())
            })

            if (filtered.length > 0) {
                this.setState({
                    artistMatch: filtered[0]
                })
            } else {
                this.setState({ artistMatch: '' })
            }

            return filtered.length > 0 ? filtered[0] : '';
        } else {
            this.setState({ artistMatch: '' })
        }

        return `Search...`
    }

    handleKeyDown(e) {
        if (this.state.search.trim().length > 0 && (e.code === 'Tab' || e.key === 'Tab') || (e.code === 'Enter' || e.key === 'Enter')) {
            e.preventDefault();

            this.setState({
                search: this.state.artistMatch
            }, () => {
                this.props.onChange(this.state.search)
            })
        }
    }

    render() {
        return (
            <div className={`relative`}>
                {
                    this.state.artistMatch.trim().length > 0
                    ?
                        <div className={`-z-10 absolute top-0 left-0 w-full md:w-96 mt-4 md:mt-0 justify-center border dark:border-gray-600 border-gray-400 dark:text-gray-300 dark:bg-gray-700 bg-white px-4 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}>
                            { this.state.artistMatch }
                        </div>
                    : <></>
                }

                <input 
                    value={this.props.search} 
                    onChange={e => { this.filterArtists(e.target.value) }} 
                    onKeyDown={e => { this.handleKeyDown(e) }}
                    placeholder={`Search...`} 
                    className={`w-full md:w-96 mt-4 md:mt-0 justify-center border dark:border-gray-600 border-gray-300 bg-transparent dark:text-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
                    type={`text`}
                />
            </div>
        )
    }
}

const mapStateToProps = ({artists}) => {
    return { artists }
}
const mapDispatchToProps = dispatch => {
    return { artistsLoaded: (artists) => dispatch({ type: `ARTISTS_LOADED`, artists }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);