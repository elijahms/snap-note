import styled from 'styled-components'
import {MyButton} from './Components/Button.style.js'
import { Container, TextField} from '@mui/material'


const NewNote = () => {
    
    return (
        <Container maxWidth="md" >
          <div className='note-div' >
            <TextField id="outlined-basic" label="New Note" variant="outlined" fullWidth multiline
              rows={8}/>
          </div>
          <MyButton variant="contained">Submit</MyButton>
        </Container>
    )
}

export default NewNote;