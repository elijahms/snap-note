import React from 'react'
import {Box, Button, Stack, Container} from '@mui/material'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Note = ({content, setSelectedNote, id, created_at}) => {
    return (
        <List>
            <ListItem
                secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                }
            button
            onClick = {(e) => setSelectedNote({
                content: content,
                id: id})}
            >
            <ListItemText primary={JSON.parse(content).blocks[0].text} secondary={'created: ' + created_at}/>            
            </ListItem>
            <Divider />
        </List>
    )
}

export default Note
