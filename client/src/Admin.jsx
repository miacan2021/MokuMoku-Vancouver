import { useState, useEffect} from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase-config'
import { Container, Grid, Typography, Button } from "@mui/material"
import { useSelector } from "react-redux"
import Form from "./components/Form/Form";
import { AdminPost } from "./components/Posts/AdminPost";
import {Link} from 'react-router-dom'
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';


const Admin = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [inPage, setInPage] = useState(false)

  const login = async() => {
    await signInWithEmailAndPassword(
      auth,
      user,
      password
    )
    await setInPage(true)
    await setUser('')
    await setPassword('')
  }

  const logout = async() => {
    await signOut(auth)
    await setInPage(false)
  }


  const [currentId, setCurrentId] = useState(null)
  const events = useSelector((state) => state.events)

  return (
    <div>
      <h1>Admin Page</h1>
    {!inPage ? 
    <Container>
    <TextField id="standard-basic" label="User Name" variant="standard"
    value={user}
    onChange={(e) => setUser(e.target.value)}
    />
    <TextField id="standard-basic" label="Password" variant="standard" type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
    <Button variant="outlined" onClick={login}>Login</Button>
    </Container>
    :
    <>
    <Container>
      <Button variant="outlined" onClick={logout}>Logout</Button>
       <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    <Container>
    <Typography variant="h4" sx={{mb:3}}>Events</Typography>
    {events.length !== 0 &&
      <Grid container spacing={3}>
          {events.map(event => (
            <Grid key={event._id} item  sx={{width:300}}>
              <AdminPost event={event} setCurrentId={setCurrentId} />
              </Grid>
          ))}
          </Grid>
        }
      </Container>
      </>
      }
      <Box display="flex" justifyContent="center" alignItems="center" sx={{m: 5}}>
      <Link to="/" style={{ textDecoration:'none' }}><Button sx={{m: 'auto'}} variant="contained">Back</Button></Link>
      </Box>
    </div>
  )
}

export default Admin