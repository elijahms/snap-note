import {useState} from 'react'
import styled from 'styled-components'
import { Container, TextField, Autocomplete, Stack, Button, Grid } from '@mui/material'
import DateAdapter from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { DateTime } from "luxon";

const AddEvents = () => {


    const now = DateTime.now();

    const [startValue, setStartValue] = useState(now);
    const [endValue, setEndValue] = useState(now);
    const [startTimeValue, setStartTimeValue] = useState(now);
    const [endTimeValue, setEndTimeValue] = useState(now);
    const [weekday, setWeekday] = useState('Monday')

    const EventMainDiv = styled(Container) `
    background-color: lightblue;
    height: 60vh;
    `
    const EventMainStack = styled(Grid) `
    padding-top: 5%;
    `

    const weekdays = [
        {label: 'Monday'},
        {label: 'Tuesday'},
        {label: 'Wednesday'},
        {label: 'Thursday'},
        {label: 'Friday'},
        {label: 'Saturday'},
        {label: 'Sunday'},
    ]

    const handleChangeStartDate = (startValue) => {
        setStartValue(startValue);
      };
      const handleChangeEndDate = (endValue) => {
        setEndValue(endValue);
      };
      const handleChangeStartTime = (startTimeValue) => {
        setStartTimeValue(startTimeValue);
      };
      const handleChangeEndTime = (endTimeValue) => {
        setEndTimeValue(endTimeValue);
      };

      const handleChangeWeekday =
      (weekday) => {
          setWeekday(weekday);
      };

      function handleSubmit(e) {
        e.preventDefault()
        
        let form = {
            start_date: startValue,
            end_date: endValue,
            weekday: weekday,
            start_hour: startTimeValue,
            end_hour: endTimeValue,
        }
        console.log(form);
        fetch("/events", {
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
    }
    
    
    
    return (
        <EventMainDiv>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <EventMainStack container maxWidth="md" spacing={2}>
                <Grid xs={12} md={6} lg={6}>
                <DesktopDatePicker
                disablePast
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={startValue}
                onChange={handleChangeStartDate}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                <TimePicker
                label="Start Time"
                value={startTimeValue}
                onChange={handleChangeStartTime}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                <DesktopDatePicker
                label="End Date"
                inputFormat="MM/dd/yyyy"
                value={endValue}
                onChange={handleChangeEndDate}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                <TimePicker
                label="End Time"
                value={endTimeValue}
                onChange={handleChangeEndTime}
                renderInput={(params) => <TextField {...params} />}/>
                </Grid>
                </EventMainStack>
                <Autocomplete
                disablePortal
                inputValue={weekday}
                id="combo-box-demo"
                options={weekdays}
                onInputChange={(event, newWeekday) => {
                    setWeekday(newWeekday);
                  }}
                renderInput={(params) => <TextField {...params} label="Weekday" />}/>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </LocalizationProvider>
        </EventMainDiv>
    )
}

export default AddEvents
