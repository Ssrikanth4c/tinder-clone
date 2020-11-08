import React from 'react';
import './Header.css';
import tinder_logo from '../assets/images/tinder-logo.svg';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
function Header(){
    return(
        <div className='header'>
            <IconButton>
                <PersonIcon className='header-icon' color='action' fontSize='large'/>
            </IconButton>
            <img src={tinder_logo} alt='tinder-logo' height={40}/>
            <IconButton>
                <ForumIcon className='header-icon' color='action' fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default Header;