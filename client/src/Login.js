import {useState} from 'react'
import {Box, TextField, Button, Stack} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components'

const Login = ({setUser}) => {

    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
      })
    
      function handleNewUser(e) {
        // const form = userForm
    
        fetch("/api/login", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(userForm)
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
              console.log(r);
            }
          })
    }
    
    return (
        <Box maxWidth='sm' className='login-box'>
            <Stack spacing={2} component="form">
            <TextField onChange={(e) => {setUserForm({...userForm, email: e.target.value})}} id='login-email' value = {userForm.email} label='email' />
            <TextField onChange={(e) => {setUserForm({...userForm, password: e.target.value})}} id='login-password'value = {userForm.password} label='password' />
            <Button onClick={handleNewUser} variant="contained">
                Login
            </Button>
            </Stack>
        </Box>
    )
}

export default Login
