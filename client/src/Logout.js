import React from 'react'
import {Box, Button, Stack} from '@mui/material'

const Logout = ({setUser}) => {

    function logoutFunc() {
        fetch("/api/logout", {
          method: "DELETE",
        })
        .then((res) => res.json)
        .then(setUser(null))
    }

    return (
        <Box maxWidth='sm' className='logout-box' >
            <Stack>
            <Button variant="contained" onClick={logoutFunc}>Logout</Button>
            </Stack>
        </Box>
    )
}

export default Logout
