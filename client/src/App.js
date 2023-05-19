import './App.css';
import { useState, useEffect } from 'react';
import Login from './Login';
import User from './User';
import { Route, Switch } from 'react-router-dom';
import { createContext } from 'react';

export const UserContext = createContext()


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/authenticate_user")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user)
          // console.table(user)
        })
      }
    })
  },[])

  const updateUser = (user) => setCurrentUser(user)
console.log(currentUser)

  return (
    <UserContext.Provider value={currentUser}>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>

        <Route path="/users/:id">
          <User updateUser={updateUser}/>
        </Route>
      </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;


