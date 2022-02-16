import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import FileBase from 'react-file-base64'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { createEvent, updateEvent, addMember } from '../../actions/posts';
import { Paper, Grid, Typography } from "@mui/material"


const Form = ({currentId, setCurrentId}) => {
    const [eventData, setEventData] = useState({
      title: '', description: '', limitNum:'' , date: new Date(), image:'', map:''
    })
    const [memberArr, setMemberArr] = useState()
    const dispatch = useDispatch()
    const event = useSelector((state) => currentId ? state.events.find((e) => e._id === currentId) : null)
   
    
    useEffect(() => {
     if(event){
       setEventData(event)
       setMemberArr(event.members)
      }
    }, [event])

    const handleSubmit = (e) => {
      e.preventDefault()
      if(currentId) {
        dispatch(updateEvent(currentId, eventData))
      }else{
      dispatch(createEvent(eventData))
    }
    clear()
    }

    const clear = () => {
      setCurrentId(null)
      setEventData({
        title: '', description: '', limitNum:'' , date: new Date(), image:'', map:''
      })
    }

    const delMember = (id) => {
      event.members = event.members.filter(m => m.twitterId !== id)
      dispatch(addMember(event._id, event.members))
      setMemberArr(event.members)
    }

  return (
    <div>
      <Paper sx={{mx: "auto", maxWidth: 'sm', my: 8, p: 3 }}>
        <Typography variant="h4" sx={{mb:3}}>{currentId ? "Edit" : "Add new"} event</Typography>
      <form onSubmit={handleSubmit}>
      <Grid container  spacing={3} direction="column" align="center">
       <Grid item xs={12} >
       <TextField 
       id="outlined-basic" 
       label="Title" 
       variant="outlined" 
       name='title'
       fullWidth 
       value={eventData.title}
       onChange={(e) => setEventData({...eventData, title: e.target.value})}
       />
       </Grid>
       <Grid item xs={12}>
       <TextField
          id="outlined-textarea"
          label="Detail"
          multiline
          fullWidth 
          name='description'
          rows={4}
          value={eventData.description}
          onChange={(e) => setEventData({...eventData, description: e.target.value})}
          />
     </Grid>
       <Grid item xs={12} >
       <TextField 
       id="outlined-basic" 
       label="Place" 
       variant="outlined" 
       name='map'
       fullWidth 
       value={eventData.map}
       onChange={(e) => setEventData({...eventData, map: e.target.value})}
       />
       </Grid>
     <Grid item xs={12}>
       <TextField 
       id="outlined-basic" 
       label="Number of people" 
       variant="outlined" 
       name='limitNumber'
       type="number"
       value={eventData.limitNum}
       onChange={(e) => setEventData({...eventData, limitNum: e.target.value})}
       />
    </Grid>
    <Grid item xs={12}>
        <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          label="Start Date, Time"
          value={eventData.date}
          renderInput={(params) => <TextField {...params} />}
          name='date'
          onChange={(e) => setEventData({...eventData, date: e})}
          />
        </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
        <FileBase
          name="image"
          type="file"
          multiple={false}
          onDone={({base64}) => setEventData({...eventData, image: base64})}
          value={eventData.image}
          />
   </Grid>
   <Grid item xs={12}>
           <Button variant="contained" type='submit' sx={{mr:3}}>Submit</Button>
           <Button variant="contained" onClick={clear}>Clear</Button>
      </Grid>
           </Grid>
          </form>
        <h1>Members</h1>
          <Grid item xs={12}>
     {memberArr && memberArr.map(m => (
      <div key={m.twitterId}>
      <p>{m.name}</p>
       <button onClick={() => delMember(m.twitterId)}>delete</button>
      </div>
      ))
      }
     
   </Grid>
          </Paper>
          
    </div>
  )
}

export default Form