// import React from 'React';

import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards(props) {
    const {people} = props;
    return (
        <div>
            <div className="tinderCard-Container">
                {
                    people.map((person, ind) => (
                        <TinderCard
                            key={person.name}
                            className='swipe'
                            ref={props.childRefs[ind]}
                            onCardLeftScreen={() => props.cardsLeft(person.name)}>
                            <div
                                className='card'
                                style={{
                                    backgroundImage: `url(${person.url})`
                                }}>
                                <div>
                                    <div className='tinderCard__names'>
                                        <h3>{person.name}</h3>
                                        <h4
                                            style={{
                                                fontSize: '20px',
                                                margin: 0,
                                                marginTop: 18,
                                                fontWeight: 400
                                            }}>{person.age}</h4>
                                    </div>
                                    <div className='tinderCard__interests'>
                                        {

                                            person
                                                .interests
                                                .map((interest, ind) => (<p key={ind}>{interest}</p>))
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
}
export default TinderCards;