const postsReducer =  (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_POST':
            return [action.payload, ...posts];
        default:
            return posts;
    }
}

export default postsReducer;