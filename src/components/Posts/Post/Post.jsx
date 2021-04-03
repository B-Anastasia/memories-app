import { Button, Card, CardActions, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles.js';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';

function Post({ post, setCurrentId }) {

    const { card, media, overlay, overlay2, button, details, title, cardActions } = useStyles();

    return (
        <Card className={card}>

            <CardMedia className={media} image={post.selectedFile} title={post.title} />

            <div className={overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={overlay2}>
                <Button className={button} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <div className={details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>

            <Typography className={title} variant="h5" gutterBottom>{post.message}</Typography>

            <CardActions className={cardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post