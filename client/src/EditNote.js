import {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from 'draft-js'
import { convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";
import {MyButton} from './Components/Button.style.js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


const EditNote = ({selectedNote, setSelectedNote}) => {
    
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(selectedNote.content))));

  const wrapperStyle = {
    border: '1px solid #969696',
  }
  
  
  const editorStyle = {
    height:'10rem',
    padding:'1rem'
  }

  function newNoteFunc() {
    fetch(`/api/notes/${selectedNote.id}`, {
      method: "PATCH",
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
        <div>
            <Editor
               toolbarOnFocus
               editorState={editorState}
               onEditorStateChange={setEditorState}
               wrapperStyle={wrapperStyle}
               editorStyle={editorStyle}   
              />
          {/* </div> */}
          <MyButton
            onClick={newNoteFunc}
            variant="contained"
            >Submit
          </MyButton>
          <MyButton
            onClick={(e) => setSelectedNote('')}
            variant="contained"
            >Back
          </MyButton>
        </div>
    )
}

export default EditNote
