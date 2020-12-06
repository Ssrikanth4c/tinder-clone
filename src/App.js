import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { useState, useMemo } from 'react';
import Header from './components/Header';
import Chats from './components/chats/Chats';
import ChatScreen from './components/chats/ChatScreen';
import TinderCards from './components/TinderCards/TinderCards.jsx';
import SwipeButtons from './components/swipeButtons/SwipeButtons'
const imgList=[
  {
      name:'Srikanth',
      age:26,
      interests:['Music', 'Road Trips', 'Netflix', 'Walking', 'Poetry'],
      url:'https://images.pexels.com/photos/3854982/pexels-photo-3854982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Pavan',
      age:21,
      interests:['Craft Beer', 'Reading', 'Dancing', 'Potterhead', 'Netflix'],
      url:'https://images.pexels.com/photos/3422525/pexels-photo-3422525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Athira',
      age:23,
      interests:['Music', 'Politics', 'Stand up Comedy', 'Potterhead', 'Dancing'],
      url:'https://images.pexels.com/photos/4287431/pexels-photo-4287431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Polina Tankilevitch',
      age:26,
      interests:['Music', 'Politics', 'Tea', 'Trivia', 'Sports', 'Reading'],
      url:'https://images.pexels.com/photos/5849319/pexels-photo-5849319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
]
const removedCardsList=[];
let charactersState=imgList;

function App() {
 
  const [people, setPeople]= useState(imgList);
  const childRefs = useMemo(() => Array(imgList.length).fill(0).map(i => React.createRef()), [])
  console.log({childRefs})
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setPeople(charactersState)
  }
  
  const swipe=(direction)=>{
    // cardsLeft means cards not in removedCardsList
    const cardsLeft=people.filter(card=> !removedCardsList.includes(card.name) );
    console.log({cardsLeft})
    if(cardsLeft.length){
      const toBeRemoved= cardsLeft[cardsLeft.length-1].name;
      const ind= imgList.map(card=>card.name).indexOf(toBeRemoved);
      // make sure next card removed next swipe means current card added to removedCardList
      removedCardsList.push(toBeRemoved);
      console.log({current: childRefs[ind]})
      childRefs[ind].current.swipe(direction);
    }
  }
  
  return (
    <div className='app'>
      <Router>
        {/* header */}
        <Switch>
          <Route path='/chats/:person'>
            <Header backButton='/chats'/>
            <ChatScreen />
          </Route>
          <Route path='/chats'>
            <Header backButton='/'/>
            <Chats />
          </Route>
          <Route path='/'>
            <Header/>
            <TinderCards people={people} cardsLeft={outOfFrame} childRefs={childRefs}/>
            <SwipeButtons  swipe= {swipe}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
