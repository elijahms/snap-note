import {Box, Button, Stack} from '@mui/material'

const Logout = ({setUser}) => {

    function logoutFunc() {
        fetch('/api/logout', { method: 'DELETE' })
        .then((data) => console.log(data));
        // .then((data) => setUser(() => null));
        setUser(null)
    }

    return (
        <Box 
            maxWidth='sm'
            className='logout-box' >
            <Stack>
                <Button 
                    variant="contained"
                    onClick={logoutFunc}
                    >Logout
                </Button>
            </Stack>
        </Box>
    )
}

export default Logout
