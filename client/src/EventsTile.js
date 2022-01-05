import {useState, useEffect} from 'react'
import Note from './Note'
import {Box, Button, Stack, Container} from '@mui/material'

const EventsTile = ({name, setSelectedNote, eventId}) => {
    
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
            {noteClick && userNotes.filter((note) => note.event_id === eventId).map((n) => <Note key={n.id}
            id={n.id}
            content={n.content}
            setSelectedNote={setSelectedNote}
            />)}
            </Stack>
        </Container>
    )
}

export default EventsTile
