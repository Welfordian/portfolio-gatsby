import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
    if (action.type === "BLOG_POSTS_LOADED") {
        return {
            ...state,
            posts: action.posts,
        }
    }

    if (action.type === "LASTFM_TRACKS_LOADED") {
        let tracks = [];
        
        if (action.clearState) {
            tracks = [...action.tracks];
        } else {
            tracks = [...state.tracks, ...action.tracks];
        }
        
        return {
            ...state,
            tracks,
        }
    }
    
    if (action.type === 'TOP_TRACKS_LOADED') {
        return {
            ...state,
            top_tracks: action.top_tracks
        }
    }
    
    if (action.type === 'SET_TOP_TRACKS_TIME_PERIOD') {
        return {
            ...state,
            top_tracks_time_period: action.time_period
        }
    }

    if (action.type === "BOOKMARKS_LOADED") {
        return {
            ...state,
            bookmarks: action.bookmarks,
        }
    }
    
    if (action.type === "BLOG_TAGS_LOADED") {
        return {
            ...state,
            tags: action.tags
        }
    }

    return state
}

const initialState = { posts: [], tracks: [], top_tracks: [], top_tracks_time_period: 'this_week', bookmarks: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
