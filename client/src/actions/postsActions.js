import axios from 'axios'
import { ADD_POST, GET_POSTS, DELETE_POST, SEARCH_POST } from '../types'

export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get('http://localhost:4000/posts')
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }catch(err) {
        console.log(err)
    }
} 

export const addPosts = (data) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4000/posts/new', data)
        dispatch({
            type: ADD_POST,
            payload: res.data.data
        })
    } catch(err) {
        console.log(err)
    }
}

export const deletePosts = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:4000/posts/delete/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch(err) {
        console.log(err);
    }
}

export const searchPost = (search) => async dispatch => {
        dispatch({
            type: SEARCH_POST,
            payload: search
        })
}