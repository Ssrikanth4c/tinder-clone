import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Chats from './components/chats/Chats';
import ChatScreen from './components/chats/ChatScreen';
import TinderCards from './components/TinderCards/TinderCards.jsx';
import SwipeButtons from './components/swipeButtons/SwipeButtons'
function App() {
  return (
    <div >
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
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
