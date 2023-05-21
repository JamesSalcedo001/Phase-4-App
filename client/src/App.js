import './App.css';
import { useState, useEffect } from 'react';
import Login from './Login';
import User from './User';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';



function App() {
  const [currentUser, setCurrentUser] = useState("")

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

  return (
   
    <div className="App">
      <Header/>
      {!currentUser ? <Login updateUser={updateUser}/> :
      <Switch>

        <Route path="/users/new">
          <Signup updateUser={updateUser}/>
        </Route>

        <Route path="/users/:id">
          <User updateUser={updateUser} />
        </Route>

        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
      
      </Switch>
      }
    </div>
  );
}

export default App;


