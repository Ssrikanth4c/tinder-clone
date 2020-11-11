import React from 'react';
import Chat from './Chat';
const Chats=()=>{
    const chatList=[
        {
            name:'Stella',
            profilePic:'https://images.unsplash.com/photo-1563859852284-29b77ae01a7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            timeStamp:'40 Seconds ago',
            message:'H! there!'
        },
        {
            name:'Lalitha',
            profilePic:'https://images.unsplash.com/photo-1584531910632-0c55032af6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            timeStamp:'1hr  ago',
            message:'H! there Whats up!'
        },
    ]
    return(
        <div>
            {
                chatList.map((chat, chatInd)=>{
                    return(
                        <div key={chatInd}>
                            <Chat chat={chat}/>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Chats;