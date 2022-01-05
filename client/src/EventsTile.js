import {useState, useEffect} from 'react'
import Notes from './Notes'
import {Box, Button, Stack, Container} from '@mui/material'

const EventsTile = ({name}) => {
    
    const [userNotes, setUserNotes] = useState({
        content: "no notes to show"
    }) 
    const [noteClick, setNoteClick] = useState(false)

    useEffect(() => {
        fetch("/api/notes")
        .then((r) => r.json())
        .then((data) => {
            setUserNotes(data)
            console.log(data)
            }
        )
      }, []);
    
    return (
        <Container className='event-tile-container'>
            <Button onClick={(e) => setNoteClick(() => !noteClick)} className='event-tile-name' variant='contained'>{name}</Button>
            <Stack>
            {noteClick && userNotes.map((n) => <Notes key={n.id} content={n.content} />)}
            </Stack>
        </Container>
    )
}

export default EventsTile
