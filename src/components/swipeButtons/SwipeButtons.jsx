import React from 'react';

import './swipeButtons.css';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { orange } from '@material-ui/core/colors';

function SwipeButtons(){
    return(
        <div className="swipeButtons">
            <IconButton className='icons'>
                <ReplayIcon  fontSize='large' style={{color:'orange'}} />
            </IconButton>
            <IconButton className='icons'>
                <ClearIcon  fontSize='large'style={{color:'#fd267d'}}/>
            </IconButton>
            <IconButton className='icons'>
                <StarIcon  fontSize='large' style={{color:'#23b9ff'}}/>
            </IconButton>
            <IconButton className='icons'>
                <FavoriteIcon  fontSize='large' style={{color:'#05e08d'}} />
            </IconButton>
            <IconButton className='icons'>
                <FlashOnIcon  fontSize='large' style={{color:'#8d4cd0'}} />
            </IconButton>
        </div>
    );
}
export default SwipeButtons;