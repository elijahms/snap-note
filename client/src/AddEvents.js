import {useState} from 'react'
import { TextField, Button, Grid, Box, FormControl, FormHelperText } from '@mui/material'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import NativeSelect from '@mui/material/NativeSelect';
import { DateTime } from "luxon";

const AddEvents = ({user}) => {


    const now = DateTime.local();
    console.log(now)
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [startValue, setStartValue] = useState(now);
    const [eventName, setEventName] = useState('')
    const [endValue, setEndValue] = useState(now);
    const [startTimeValue, setStartTimeValue] = useState('09:00');
    const [endTimeValue, setEndTimeValue] = useState('11:00');
    const [weekday, setWeekday] = useState('')
    const [inputValue, setInputValue] = useState('');

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
            user_id: user.id,
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
        <Box maxWidth='sm' className='add-event-main-box' >
          <h1>Add a New Event:</h1>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Grid className='add-event-main-grid' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={12} lg={12} >
                <TextField
                  // error
                  label="Name"
                  sx={{width:'90%'}}
                  autoFocus
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
                </Grid>
        </LocalizationProvider>
        </Box>
    )
}

export default AddEvents
