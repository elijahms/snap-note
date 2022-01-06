import {useState, useEffect} from 'react'
import Note from './Note'
import { Button, ListItemAvatar, Stack} from '@mui/material'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const EventsTile = ({name, setSelectedNote, eventId}) => {
    
    const [userNotes, setUserNotes] = useState({
        content: "no notes to show"
    }) 
    const [noteClick, setNoteClick] = useState(false)
    const [triggerRerender, setTriggerRerender] = useState(false)


    useEffect(() => {
        fetch("/api/notes")
        .then((r) => r.json())
        .then((data) => {
            setUserNotes(data)
            console.log(data)
            }
        )
      }, [triggerRerender]);
    
    return (
        <List>
            <ListItem
            button
            onClick={(e) => setNoteClick(() => !noteClick)}
            className='event-tile-name'
            >
            <ListItemText primary={name}/>
            {noteClick ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={noteClick} timeout="auto" unmountOnExit>
            {noteClick && userNotes.filter((note) => note.event_id === eventId).map((n) => 
            <Note
            setTriggerRerender={setTriggerRerender}
            triggerRerender={triggerRerender}
            key={n.id}
            id={n.id}
            content={n.content}
            created_at={n.created_at}
            setSelectedNote={setSelectedNote}
            />)}
            </Collapse>
        </List>
    )
}

export default EventsTile
