import axios from 'axios';

// on Mac disable AirPlay, because macOS Monterey started to listen to port 5000
// System Preferences > Sharing > untick AirPlay Receiver
const url = "https://memories-pr-app.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);