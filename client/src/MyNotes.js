import {useState, useEffect} from 'react'
import EventsTile from './EventsTile';
import {Box, Button, Stack} from '@mui/material'

const MyNotes = () => {

    const [userEvents, setUserEvents] = useState(null) 

    useEffect(() => {
        // auto-login
        fetch("/api/events")
        .then((r) => r.json())
        .then((data) => {
            setUserEvents(data)
            console.log(data)
            }
        )
      }, []);

    
    return (
        <Box maxWidth='sm' className='notes-main-box' >
            <Stack spacing={2}>
            {userEvents && userEvents.map((e) => <EventsTile key={e.id} name={e.name} />)}
            </Stack>
        </Box>
    )
}

export default MyNotes
