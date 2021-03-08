import React from 'react';
import Post from './Post/Post';
import useStyles from './styles.js';

function Posts() {
    const {appBar} = useStyles();
    return (
        <>
        <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default Posts
