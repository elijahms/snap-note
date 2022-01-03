import {useState} from 'react'
import styled from 'styled-components'
import { Container, TextField, Autocomplete, Stack, Button, Grid, Box, FormControl, FormHelperText } from '@mui/material'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import NativeSelect from '@mui/material/NativeSelect';
import { DateTime } from "luxon";

const AddEvents = () => {


    const now = DateTime.now();
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [startValue, setStartValue] = useState(now);
    const [eventName, setEventName] = useState('')
    const [endValue, setEndValue] = useState(now);
    const [startTimeValue, setStartTimeValue] = useState('09:00');
    const [endTimeValue, setEndTimeValue] = useState('11:00');
    const [weekday, setWeekday] = useState('')
    const [inputValue, setInputValue] = useState('');

    const EventMainDiv = styled(Box) `
    background-color: #C2CAD0;
    min-height: 60vh;
    padding-top: 1%;
    // border: 2px solid red;
    margin: auto;
    padding-bottom: 2%;
    `
    const EventMainGrid = styled(Grid) `
    // padding-top: 5%;
    // text-align: center;
    // border: 2px solid green;
    margin: auto;
    width: 100%;
    //justify-content: center;
    // display: flex;
    `

    const TitleText = styled.h1 `
    text-align: center;
    `

    function formReset() {
      setEventName('')
      setStartTimeValue('09:00')
      setEndTimeValue('11:00')

    }

      function handleSubmit(e) {
        e.preventDefault()
        
        let form = {
            start_date: startValue,
            end_date: endValue,
            weekday: weekday,
            start_hour: startTimeValue,
            end_hour: endTimeValue,
            name: eventName,
        }
        console.log(form);
        fetch("/api/events", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(form)
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
        })
        formReset()
    }
    
    return (
        <EventMainDiv maxWidth='sm' >
          <TitleText>Add a New Event:</TitleText>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <EventMainGrid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={12} lg={12} >
                <TextField
                  // error
                  label="Name"
                  sx={{width:'90%'}}
                  autoFocus = 'true'
                  value={eventName}
                  onChange={(e) => {setEventName(e.target.value);}}
                  helperText="Enter an Event Name e.g. Bio 101"
                />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <DesktopDatePicker
                // disablePast
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={startValue}
                onChange={(startValue) => {setStartValue(startValue)}}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <FormControl >
                  <TextField
                    id="time"
                    onChange={(e) => {setStartTimeValue(e.target.value);}}
                    label="Start Time"
                    type="time"
                    value = {startTimeValue}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <FormControl >
                <TextField
                    id="time"
                    onChange={(e) => {
                      setEndTimeValue(e.target.value);
                    }}
                    label="End Time"
                    type="time"
                    value = {endTimeValue}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}/>
                    {/* <FormHelperText>Time event ends</FormHelperText> */}
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <DesktopDatePicker
                label="End Date"
                inputFormat="MM/dd/yyyy"
                value={endValue}
                onChange={(endValue) => {setEndValue(endValue)}}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                <NativeSelect
                  value={weekday}
                  label="Age"
                  onChange={(e) => {setWeekday(e.target.value);}}>
                  {weekdays.map((w) => <option key={w} value={w}>{w}</option>)}
                </NativeSelect>
                <FormHelperText>Day of the week</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={12} lg={12} >
                <Button
                variant="contained"
                onClick={handleSubmit}>
                  Submit
                </Button>
                </Grid>
                </EventMainGrid>
        </LocalizationProvider>
        </EventMainDiv>
    )
}

export default AddEvents
