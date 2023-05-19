import './App.css';
import { useState, useEffect } from 'react';
import Login from './Login';
// import { Route, Switch } from 'react-router-dom';
// import { useContext } from 'react';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;


