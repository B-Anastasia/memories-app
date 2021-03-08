import {makeStyles} from '@material-ui/core';
import memories from './assets/images/memories.jpg';

export default makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${memories})`,
        height: 120,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
      },
}));