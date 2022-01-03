import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import AddEvents from "./AddEvents";
import NavBar from "./NavBar";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
  <div>
    <NavBar />
    <Switch>
        <Route path="/newevent">
        <AddEvents />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route path="/">
        <NewNote />
        </Route>
      </Switch>
  </div>
  );
}

export default App;
