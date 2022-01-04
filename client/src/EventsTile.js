import React from 'react'
import {Box, Button, Stack, Container} from '@mui/material'

const EventsTile = ({name}) => {
    return (
        <Container className='event-tile-container'>
            <Button className='event-tile-name' variant='contained'>{name}</Button>
        </Container>
    )
}

export default EventsTile
