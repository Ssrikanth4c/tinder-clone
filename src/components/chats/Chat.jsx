import React from 'react';
import './chat.css';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
const Chat=({chat})=>{
    return(
        <Link to={`/chats/${chat.name}`}>
            <div className='chat'>
                <Avatar src={chat.profilePic} />
                {/* <img src={chat.profilePic} width={50} height={50} alt={chat.name}/> */}
                <div className='chat-message'>
                    <h3>{chat.name}</h3>
                    <p>{chat.message}</p>
                </div>
                <p>{chat.timeStamp}</p>
            </div>
        </Link>
    );
}
export default Chat;