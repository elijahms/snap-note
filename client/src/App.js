import NewNote from "./NewNote";
import AddEvents from "./AddEvents";
import NavBar from "./NavBar";
import Login from "./Login";
import MyNotes from "./MyNotes";
import Logout from "./Logout";
import Signup from "./Signup";
import { Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/api/me")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
      } else {
        console.log("no user");
      }
    });

  }, []);

  
 
  return (
  <div>
    {user ? <h1> Welcome {user.first_name} </h1> : <h1>SnapNote</h1>}
    <NavBar />
    <Switch>
        <Route path="/newevent">
        {user ? <AddEvents user={user} /> : <Login setUser={setUser} />}
        </Route>
        <Route exact path="/login">
        {!user ? <Signup setUser={setUser} /> : <Logout setUser={setUser}/>}
        </Route>
        <Route exact path="/mynotes">
        {user ? <MyNotes user={user} /> : <Login setUser={setUser} />}
        </Route>
        <Route path="/">  
        {user ? <NewNote user={user} /> : <Login setUser={setUser} />}
        </Route>
      </Switch>
  </div>
  );
  
}

export default App;
