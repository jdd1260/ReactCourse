import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const NEW_POST = 'new_post';
export const DELETE_POST = 'delete_post';


function apiPath(path) {
    return `http://reduxblog.herokuapp.com/api${path}?key=jdd1260`;
}

export function fetchPosts() {
    const request = axios.get(apiPath('/posts'));
    
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(apiPath('/posts'), values).then(callback);
    
    return {
        type: NEW_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(apiPath(`/posts/${id}`));
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(apiPath(`/posts/${id}`)).then(callback);
    return {
        type: DELETE_POST,
        payload: id
    }
}