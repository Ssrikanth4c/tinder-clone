import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './chat.css';
const ChatScreen = () => {
    const [input, SetInput]=useState('');
    const [message, SetMessage] = useState([
        {
            name: 'rajini',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSThz0gYaE6aUXVv7mN5ewy' +
                    'LrD4cpJwqPzEvg&usqp=CAU',
            message: 'Hi there !'
        }, {
            name: 'rajini',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSThz0gYaE6aUXVv7mN5ewy' +
                    'LrD4cpJwqPzEvg&usqp=CAU',
            message: 'How are you '
        }, {
            message: 'Hi, How are you '
        }
    ])
    const handleSubmit=e=>{
        e.preventDefault();
        SetMessage([ ...message ,{message: input}])
        SetInput('')

    }
    return (
        <div>
            {
                message
                    ?.map(msg => (
                        msg.name
                            ? (
                                <div className='chatScreen' key={msg.name}>
                                    <Avatar src={msg.url} alt={msg.name} className='chatScreen__avatar'/>
                                    <p className='chatScreen__message'>{msg.message}</p>
                                </div>
                            )
                            : (
                                <div className='chatScreen'>
                                    <p className='chatScreen__messageUser'>{msg.message}</p>
                                </div>
                            )
                    ))
            }
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e)=>SetInput(e.target.value)}
                    type="text"
                    placeholder='Type a message ...'
                    className='chartScreen__inputField'/>
                <button onClick={handleSubmit} type='submit' className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;