import React, { useEffect } from 'react'

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';

export default function App() {

    const {appBar} = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit' className={appBar}>
                <Typography variant='h2' align='center'>Memories</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
