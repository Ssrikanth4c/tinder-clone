import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>Chat</h1>
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
