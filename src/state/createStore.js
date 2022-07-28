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

    if (action.type === "BOOKMARKS_LOADED") {
        return {
            ...state,
            bookmarks: action.bookmarks,
        }
    }
    
    if (action.type === "BLOG_TAGS_LOADED") {
        console.log(action);
        return {
            ...state,
            tags: action.tags
        }
    }

    return state
}

const initialState = { posts: [], tracks: [], bookmarks: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
