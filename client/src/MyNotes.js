import {useState, useEffect} from 'react'
import EventsTile from './EventsTile';
import {Box, Button, Stack} from '@mui/material'
import EditNote from './EditNote';
import { set } from 'draft-js/lib/DefaultDraftBlockRenderMap';

const MyNotes = () => {

    const [userEvents, setUserEvents] = useState(null)
    const [selectedNote, setSelectedNote] = useState('') 

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
            {!selectedNote ? <Stack spacing={2}>
            {userEvents && userEvents.map((e) => <EventsTile setSelectedNote={setSelectedNote} key={e.id} name={e.name} eventId={e.id} />)}
            </Stack> : <EditNote selectedNote={selectedNote} setSelectedNote={setSelectedNote} />}
        </Box>
    )
}

export default MyNotes
