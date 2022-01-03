import React from 'react'
import styled from 'styled-components'
import { Container, TextField, Button } from '@mui/material'


const NewNote = () => {
    
    const NoteDiv = styled.div `
    padding-top: 10%;
    // background-color: blue;
    opacity: 0.6;
    height: 250px;
    `

    const CssTextField = styled(TextField) `
    background-color: white;
    `
    
    return (
        <Container maxWidth="md" >
        <NoteDiv>
        <CssTextField id="outlined-basic" label="New Note" variant="outlined" fullWidth multiline
          rows={8}/>
        </NoteDiv>
        <Button variant="contained">Submit</Button>
        </Container>
    )
}

export default NewNote;