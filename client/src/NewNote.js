import styled from 'styled-components'
import {MyButton} from './Components/Button.style.js'
import { Container, TextField} from '@mui/material'
import UseState, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from 'draft-js'
import { convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'



const NewNote = ({user}) => {


  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

const wrapperStyle = {
  border: '1px solid #969696',
}

const editorStyle = {
  height:'20rem',
  padding:'1rem'
}

  function newNoteFunc() {
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
    fetch("/api/notes", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json"
      },
     
      body:  JSON.stringify({content: JSON.stringify(convertToRaw(editorState.getCurrentContent()))})
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((r) => console.log(r));
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }
    
    return (
        <Container maxWidth="md" >
          <div className='note-div' >
              <Editor
               editorState={editorState}
               onEditorStateChange={setEditorState}
               wrapperStyle={wrapperStyle}
               editorStyle={editorStyle}   
              />
          </div>
          <MyButton
            onClick={newNoteFunc}
            variant="contained"
            >Submit
          </MyButton>
        </Container>
    )
}

export default NewNote;