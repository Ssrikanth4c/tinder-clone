import React from 'react';
import { useHistory } from 'react-router'
import './swipeButtons.css';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons(props){
    const history = useHistory();
    return(
        <div className="swipeButtons">
            <IconButton className='icons'>
                <ReplayIcon  fontSize='large' style={{color:'orange'}} onClick={()=>history.go(0)} />
            </IconButton>
            {/* swiipe left dislike */}
            <IconButton className='icons' onClick={()=>props.swipe('left')}>
                <ClearIcon  fontSize='large'style={{color:'#fd267d'}}/>
            </IconButton>
            <IconButton className='icons' onClick={()=>props.swipe('up')}>
                <StarIcon  fontSize='large' style={{color:'#23b9ff'}}/>
            </IconButton>
            <IconButton className='icons'>
                {/* swipe right like */}
                <FavoriteIcon  fontSize='large' style={{color:'#05e08d'}} onClick={()=>props.swipe('right')} />
            </IconButton>
            <IconButton className='icons'>
                <FlashOnIcon  fontSize='large' style={{color:'#8d4cd0'}} onClick={()=>props.swipe('down')} />
            </IconButton>
        </div>
    );
}
export default SwipeButtons;