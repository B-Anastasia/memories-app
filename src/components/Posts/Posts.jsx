import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles.js';

function Posts({setCurrentId}) {
    const { container } = useStyles();

    const posts = useSelector(state => state.posts.posts);

    return (
        !posts.length ? <CircularProgress /> :
            (<Grid container spacing={2} className={container} alignItems="stretch">
                {posts.map((post, index) => (
                    <Grid item key={post.id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>)
    )
}

export default Posts
