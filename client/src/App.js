import NewNote from "./NewNote";
import AddEvents from "./AddEvents";
import NavBar from "./NavBar";
import Login from "./Login";
import MyNotes from "./MyNotes";
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
  <div>
    <h1>SnapNote</h1>
    <NavBar />
    <Switch>
        <Route path="/newevent">
        <AddEvents />
        </Route>
        <Route exact path="/login">
        <Login />
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
