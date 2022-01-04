import NewNote from "./NewNote";
import AddEvents from "./AddEvents";
import NavBar from "./NavBar";
import Login from "./Login";
import MyNotes from "./MyNotes";
import Logout from "./Logout";
import { Route, Switch } from "react-router-dom";
import {useState} from 'react'

function App() {

const [user, setUser] = useState(null)
  
  return (
  <div>
    <h1>SnapNote -- Welcome {user ? user.first_name : 'User'}</h1>
    <NavBar />
    <Switch>
        <Route path="/newevent">
        <AddEvents />
        </Route>
        <Route exact path="/login">
        {user ? <Logout /> : <Login setUser={setUser}/>}
        </Route>
        <Route exact path="/mynotes">
        <MyNotes />
        </Route>
        <Route path="/">
        <NewNote />
        </Route>
      </Switch>
  </div>
  );
}

export default App;
