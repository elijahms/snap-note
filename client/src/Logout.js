import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Logout = ({setUser}) => {

    function logoutFunc() {
        fetch('/api/logout', { method: 'DELETE' })
        .then((data) => console.log(data));
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
