// import React from 'React';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
function TinderCards(){
    const [people, setPeople]= useState([
        {
            name:'srikanth',
            url:'https://images.pexels.com/photos/3854982/pexels-photo-3854982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name:'pavan',
            url:'https://images.pexels.com/photos/3422525/pexels-photo-3422525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]);
    return(
        <div>
            <div className="tinderCard-Container">
                {people.map(person=>(
                    <TinderCard key={person.name} className='swipe'>
                        <div className='card' style={{backgroundImage:`url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
                
            </div>
        </div>
    );
}
export default TinderCards;