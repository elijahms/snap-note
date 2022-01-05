import styled from 'styled-components'
import {MyButton} from './Components/Button.style.js'
import { Container, TextField} from '@mui/material'
import UseState, { useState } from 'react'


const NewNote = ({user}) => {

  const [note, setNote] = useState({content: ''})

  function newNoteFunc() {
    fetch("/api/notes", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(note)
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }
    
    return (
        <Container maxWidth="md" >
          <div className='note-div' >
            <TextField id="outlined-basic" label="New Note" variant="outlined" fullWidth multiline
            onChange={(e) => {setNote({...note, content: e.target.value})}}
            value = {note.content} autoFocus
              rows={8}/>
          </div>
          <MyButton onClick={newNoteFunc} variant="contained">Submit</MyButton>
        </Container>
    )
}

export default NewNote;