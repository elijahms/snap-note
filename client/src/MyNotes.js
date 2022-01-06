import {useState, useEffect} from 'react'
import EventsTile from './EventsTile';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import EditNote from './EditNote';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const MyNotes = () => {

    const [userEvents, setUserEvents] = useState([])
    const [selectedNote, setSelectedNote] = useState('')

    useEffect(() => {
        fetch("/api/events")
        .then((r) => r.json())
        .then((data) => {
            setUserEvents(data)
            console.log(data)
            }
        )
      }, []);

    
    return (
        <Container component="main" maxWidth="md">
            {
            !selectedNote ? 
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: 'white',
                    padding: '5px'
                }}>
                <Stack spacing={1} sx={{width: '100%'}} >
                {
                userEvents.length > 0 ? userEvents.map((e) =>  
                    <EventsTile
                    setSelectedNote={setSelectedNote}
                    key={e.id}
                    name={e.name}
                    eventId={e.id} />
                    )
                    : 
                    <List>
                        <ListItem>
                            <ListItemText primary="No Notes" secondary='Create a note' />
                        </ListItem>
                    </List>
                }
            </Stack>
            </Box>
             : 
             <EditNote selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
             }
        </Container>
    )
}

export default MyNotes
