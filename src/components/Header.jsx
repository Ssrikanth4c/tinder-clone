import React from 'react';
import './Header.css';
import tinder_logo from '../assets/images/tinder-logo.svg';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; 

import {Link, useHistory} from 'react-router-dom';
function Header(props){
    const {backButton}=props;
    const history = useHistory();
    console.log(history)
    return(
        <div className='header'>
            {
                backButton?(
                <IconButton  onClick={()=>history.replace(backButton)}>
                    <ArrowBackIosIcon  fontSize='large' classname='header-icon'/>
                </IconButton>)
                :
                (
                    <IconButton>
                        <PersonIcon className='header-icon' color='action' fontSize='large'/>
                    </IconButton>
                )
            }
            <Link to='/'>
                <IconButton>
                    <img src={tinder_logo} alt='tinder-logo' height={40}/>
                </IconButton>
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <ForumIcon className='header-icon' color='action' fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;