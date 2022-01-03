import {useState} from 'react'
import {Box, TextField, Button, Stack} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components'

const Login = () => {

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
        <Box maxWidth='sm' className='login-box'>
            <Stack spacing={2} component="form">
            <TextField onChange={(e) => {setUserForm({...userForm, first_name: e.target.value})}} id='firstname' autoFocus value = {userForm.first_name} label='first name' />
            <TextField onChange={(e) => {setUserForm({...userForm, last_name: e.target.value})}} id='lastname' value = {userForm.last_name} label='last name' />
            <TextField onChange={(e) => {setUserForm({...userForm, email: e.target.value})}} id='email' value = {userForm.email} label='email' />
            <TextField onChange={(e) => {setUserForm({...userForm, username: e.target.value})}} id='username' value = {userForm.username} label="username" />
            <TextField onChange={(e) => {setUserForm({...userForm, password_digest: e.target.value})}} id='password'value = {userForm.password_digest} label='password' />
            <Button onClick={handleNewUser} variant="contained">
                Submit
            </Button>
            </Stack>
        </Box>
    )
}

export default Login
