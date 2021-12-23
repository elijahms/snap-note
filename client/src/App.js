import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import AddEvents from "./AddEvents";

function App() {

  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password_digest: '',
    first_name: '',
    last_name: '',
  })

  function handleFormUpdate(e) {
    setUserForm({...userForm, [e.target.name]: e.target.value})
  }

  function handleNewUser(e) {
    e.preventDefault()
    console.log(userForm);

  const form = userForm

  const test = '12434'

    fetch("/users", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(form)
    })
    .then((r) => r.json())
    .then((data) => {
        console.log(data);
  })
  e.target.reset()
}
  
  return (
  
  <div>
  <h1>Hello from React!</h1>
  <form onSubmit={handleNewUser}>
    <label>username</label>
    <input onChange={handleFormUpdate} type='text' name='username'></input>
    <label>password</label>
    <input onChange={handleFormUpdate} type='text' name='password_digest'></input>
    <label>firstname</label>
    <input onChange={handleFormUpdate} type='text' name='first_name'></input>
    <label>lastname</label>
    <input onChange={handleFormUpdate} type='text' name='last_name'></input>
    <label>email</label>
    <input onChange={handleFormUpdate} type='text' name='email'></input>
    <button>Submit</button>
  </form>
  <NewNote />
  <AddEvents />
  </div>
  
  );
}

export default App;
