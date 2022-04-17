import React, {useEffect, useState} from 'react';
import useStyles from './styles.js';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../redux/actions/posts.js';

const initialValuesForm = {
    creator: '',
    title: '',
    message: '',
    selectedFile: '',
    tags: [],
}

// GET POST ID

function Form({currentId, setCurrentId}) {

    const dispatch = useDispatch();

    const {buttonSubmit, fileInput, form, paper, root} = useStyles();

    const post = useSelector(state => currentId ? state.posts.posts.find(post => post._id === currentId) : null)
    const pending = useSelector(state => state.posts.pending)
    const [postData, setPostData] = useState(initialValuesForm);
    console.log(pending)

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
        dispatch(createPost(postData));
        }

        clear();

    };

    const clear = () => {
        setPostData(initialValuesForm)
        setCurrentId(null);
    };

    // TODO: validate form fields
    // TODO: use formik
    // TODO: use typescript first

    return (
        <Paper className={paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${form} ${root}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    value={postData.creator}
                    fullWidth
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                    required
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={postData.title}
                    fullWidth
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                    required
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    value={postData.message}
                    fullWidth
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={postData.tags || ""}
                    fullWidth
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                />
                <div className={fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button
                    className={buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                    disabled={pending}
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form
