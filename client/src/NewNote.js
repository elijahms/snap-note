import {MyButton} from './Components/Button.style.js'
import Container  from '@mui/material/Container'
import { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from 'draft-js'
import { convertToRaw } from "draft-js";
import Stack from '@mui/material/Stack'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Box from '@mui/material/Box';


const NewNote = ({user}) => {


  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [isNew, setIsNew] = useState(true)

  const wrapperStyle = {
    borderRadius: '4px'
  }

  const editorStyle = {
    height:'30rem',
    padding:'1rem'
  }

  function newNoteFunc() {
    // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
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

  // document.addEventListener("keydown", function(e) {
  //   if (isNew && e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
  //     console.log('yo')
  //     e.preventDefault();
  //     newNoteFunc()
  //     setIsNew(false)
  //   }
  // }, false);
    
    return (
        <Container component='main' maxWidth="lg" 
        sx={{
          marginTop: 3,
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Stack spacing={2}>
            <Box
            sx={{boxShadow: 3, borderRadius: 2}}
            >
              <Editor
              toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily'],
                inline: {
                  options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                  bold: { className: 'bordered-option-classname' },
                  italic: { className: 'bordered-option-classname' },
                  underline: { className: 'bordered-option-classname' },
                  strikethrough: { className: 'bordered-option-classname' },
                  code: { className: 'bordered-option-classname' },
                },
                blockType: {
                  className: 'bordered-option-classname',
                },
                fontSize: {
                  className: 'bordered-option-classname',
                },
                fontFamily: {
                  className: 'bordered-option-classname',
                },
              }}
               editorState={editorState}
               onEditorStateChange={setEditorState}
               wrapperStyle={wrapperStyle}
               editorStyle={editorStyle}   
              />
              </Box>
          <MyButton
            onClick={newNoteFunc}
            variant="contained"
            >Submit
          </MyButton>
          </Stack>
        </Container>
    )
}

export default NewNote;