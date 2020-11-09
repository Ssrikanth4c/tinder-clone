import React from 'react';
import './chat.css';
import Avatar from '@material-ui/core/Avatar';
const Chat=({chat})=>{
    return(
        <div className='chat'>
            <Avatar src={chat.profilePic} />
            {/* <img src={chat.profilePic} width={50} height={50} alt={chat.name}/> */}
            <div className='chat-message'>
                <h3>{chat.name}</h3>
                <p>{chat.message}</p>
            </div>
            <p>{chat.timeStamp}</p>
        </div>
    );
}
export default Chat;