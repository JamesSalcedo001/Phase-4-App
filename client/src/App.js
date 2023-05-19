import './App.css';
import { useState } from 'react';
import Login from './Login';
// import { Route, Switch } from 'react-router-dom';
// import { useContext } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const updateUser = (user) => setCurrentUser(user)

  console.log(currentUser)

  return (
    <div className="App">
      <Login updateUser={updateUser}/>
      {/* <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;


