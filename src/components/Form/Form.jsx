import React, { useState } from 'react';
import useStyles from './styles.js';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from 'react-file-base64';

const initialValuesForm = {
    creator: '',
    title: '',
    message: '',
    selectedFile: '',
}

function Form() {

    const { buttonSubmit, fileInput, form, paper, root } = useStyles();

    const [postData, setPostData] = useState(initialValuesForm)

    const handleSubmit = () => { };

    const clear = () => {setPostData(initialValuesForm)};

    return (
        <Paper className={paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${form} ${root}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    value={postData.creator}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={postData.title}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    value={postData.message}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={postData.tags}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={(file) => setPostData({ ...postData, selectedFile: file })}
                    />
                </div>
                <Button
                    className={buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
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
