import React from 'react'
import {Box, Button, Stack, Container} from '@mui/material'

const Note = ({content, setSelectedNote, id}) => {
    return (
        <div>
            <Button
            onClick = {(e) => setSelectedNote({
                content: content,
                id: id,
            })}
            >{JSON.parse(content).blocks[0].text}</Button>
        </div>
    )
}

export default Note
