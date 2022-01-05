import styled from 'styled-components'
import {MyButton} from './Components/Button.style.js'
import { Container, TextField} from '@mui/material'
import UseState, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from 'draft-js'
import { convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";



const NewNote = ({user}) => {


  const test = '{"blocks":[{"key":"53b0u","text":"asdfasdf","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c7he5","text":"asdf","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4ncjr","text":"dfasf","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"2lgf7","text":"weq","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":3,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}'

  const [editorState, setEditorState] = useState(() =>
  EditorState.createWithContent(convertFromRaw(JSON.parse(test)))
);
const wrapperStyle = {
  border: '1px solid #969696',
}

const editorStyle = {
  height:'10rem',
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