import {
    CREATE_POSTS, GET_POSTS,
    UPDATE_POSTS, DELETE_POSTS,
    CREATE_POSTS_ERROR, GET_POSTS_ERROR,
    UPDATE_POSTS_ERROR, DELETE_POSTS_ERROR
} from '../index';
import axios from 'axios';

const URL_API = process.env.REACT_APP_API_URL;

export const createPostAction = (formData) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL_API}/api/posts/createpost`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: CREATE_POSTS,
            payload: response?.data
        })
    } catch(err) {
        dispatch({
            type: CREATE_POSTS_ERROR,
            payload: err
        })
    }
}

export const getPostsAction = () => async (dispatch) => {
    try {
        const response = await axios.get(`${URL_API}/api/posts/getposts`)
        dispatch({
            type: GET_POSTS,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: err
        })
        console.log(err.message);
    }
}

export const updatePostsAction = (id, formData) => async (dispatch) => {
    try {
        const response = await axios.put(`${URL_API}/api/posts/updatepost/${id}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: UPDATE_POSTS,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: UPDATE_POSTS_ERROR,
            payload: err
        })
        console.log(err.message);
    }
}

export const deletePostsAction = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${URL_API}/api/posts/deletepost/${id}`)
        dispatch({
            type: DELETE_POSTS,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: DELETE_POSTS_ERROR,
            payload: err
        })
        console.log(err.message);
    }
}