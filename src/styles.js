import { makeStyles } from '@material-ui/core';
import memory from './assets/images/memory.jpg';

export default makeStyles(() => ({
  appBar: {
    margin: '0 0 30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    color: 'rgba(0, 0, 0, 0.72)',
  },
  image: {
    backgroundImage: `linear-gradient(transparent, #f0f0f0 ), url(${memory})`,
    backgroundSize: 'cover',
  },

}));