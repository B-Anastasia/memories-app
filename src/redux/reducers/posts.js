const initialState = {
    posts: [],
    pending: false,
}

const postsReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'PENDING':
            return {...state, pending: action.payload};
        case 'FETCH_ALL':
            return {...state, posts: action.payload};
        case 'CREATE_POST':
            return {...state, posts: [action.payload, ...state.posts]};
        case 'UPDATE_POST':
            const updatedPosts = state.posts.map(post=> post._id===action.payload._id ? action.payload : post);
            return {...state, posts: updatedPosts};
        default:
            return state;
    }
}

export default postsReducer;