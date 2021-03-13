import React, { useEffect } from 'react'

import { Container, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';

export default function App() {

    const { appBar, image } = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        
        <>
            <div className={image}>
                <Typography variant='h2' className={appBar} align='center'>Memories</Typography>
                <Container maxWidth="lg">
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
            </div>
        </>
    )
}
