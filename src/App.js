import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import TinderCards from './components/TinderCards/TinderCards.jsx';
import SwipeButtons from './components/swipeButtons/SwipeButtons'
function App() {
  return (
    <div >
      <Router>
        {/* header */}
        <Switch>
          <Route path='/chat'>
            <Header backButton='/'/>
            <h1>Chat</h1>
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
