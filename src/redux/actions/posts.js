import * as api from '../../api';

// Action Creators
export const getPosts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const {data} = await api.createPost(newPost);
        dispatch({type: 'CREATE_POST', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, newPost) => async (dispatch) => {
    try {
        dispatch({type: 'PENDING', payload: true});
        const {data} = await api.updatePost(id, newPost);
        dispatch({type: 'UPDATE', payload: data});
        await dispatch(getPosts());
        dispatch({type: 'PENDING', payload: false});
    } catch (e) {
        dispatch({type: 'PENDING', payload: false});
        console.log(e.message)
    }
}
