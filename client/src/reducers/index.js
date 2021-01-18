import { GET_POSTS, ADD_POST, DELETE_POST, SEARCH_POST } from '../types'

const initialState = {
    isLoading: true,
    posts: [],
    filterPosts: [],
}


const posts = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, action.payload] 
            }
        case DELETE_POST: 
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.payload)]
            }
        case SEARCH_POST:
            if(action.payload) {
                const filterPosts = state.posts.filter(post => post.name.toLowerCase().includes(action.payload.toLowerCase()))
                return {
                    ...state,
                    filterPosts: filterPosts
                }
            } else {
                return {
                    ...state,
                    filterPosts: []
                }
            }
        default:
            return state;
    }
}

export default posts