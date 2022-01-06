import {useState, useEffect} from 'react'
import Note from './Note'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const EventsTile = ({name, setSelectedNote, eventId, setTriggerRerender, triggerRerender}) => {
    
    const [userNotes, setUserNotes] = useState('') 
    const [noteClick, setNoteClick] = useState(false)
    // const [triggerRerender, setTriggerRerender] = useState(false)


    function deleteEventFunc(e) {
        fetch(`/api/events/${eventId}`, { method: 'DELETE' })
        .then((message) => console.log(message));
        setTriggerRerender((triggerRerender) => !triggerRerender)
    }


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
            <ListItem
            secondaryAction={
                <IconButton 
                edge="end"
                aria-label="delete"
                onClick={deleteEventFunc}
                >
                <DeleteIcon />
                </IconButton>
                }
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
