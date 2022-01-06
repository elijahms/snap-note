import {useState, useEffect} from 'react'
import Note from './Note'
import { Button, ListItemAvatar, Stack} from '@mui/material'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
        <List>
            <ListItem>
            <Button onClick={(e) => setNoteClick(() => !noteClick)} className='event-tile-name' variant='contained'>{name}</Button>
            </ListItem>
            {noteClick && userNotes.filter((note) => note.event_id === eventId).map((n) => 
            <Note 
            key={n.id}
            id={n.id}
            content={n.content}
            created_at={n.created_at}
            setSelectedNote={setSelectedNote}
            />)}
        </List>
    )
}

export default EventsTile
