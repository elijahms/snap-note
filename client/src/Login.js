import {useState} from 'react'
import {Box, TextField, Button, Stack} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components'

const Login = () => {

    const LoginBox = styled(Box) `
    // background-color: #C2CAD0;
    min-height: 60vh;
    padding-top: 1%;
    // border: 2px solid red;
    margin: auto;
    padding-bottom: 2%;
    `

    const [userForm, setUserForm] = useState({
        username: '',
        email: '',
        password_digest: '',
        first_name: '',
        last_name: '',
      })
    
      function handleNewUser(e) {
        e.preventDefault()
        console.log(userForm);
    
        const form = userForm
    
        fetch("/api/users", {
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
    }
    return (
        <LoginBox maxWidth='sm' component="form">
            <Stack spacing={2}>
            <TextField onChange={(e) => {setUserForm(...userForm, {first_name: e.target.value})}} value = {userForm.first_name} label='first name' ></TextField>
            <TextField onChange={(e) => {setUserForm.last_name(e.target.value)}} label='last name' ></TextField>
            <TextField onChange={(e) => {setUserForm.email(e.target.value)}} label='email' ></TextField>
            <TextField onChange={(e) => {setUserForm.username(e.target.value)}} label="username" ></TextField>
            <TextField onChange={(e) => {setUserForm.password_digest(e.target.value)}} label='password' ></TextField>
            <Button onClick={handleNewUser} variant="contained">
                Submit
            </Button>
            </Stack>
        </LoginBox>
    )
}

export default Login
