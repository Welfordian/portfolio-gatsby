import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
    if (action.type === "BLOG_POSTS_LOADED") {
        return {
            ...state,
            posts: action.posts,
        }
    }

    if (action.type === "LASTFM_TRACKS_LOADED") {
        return {
            ...state,
            tracks: action.tracks,
        }
    }

    return state
}

const initialState = { posts: [], tracks: [] }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
