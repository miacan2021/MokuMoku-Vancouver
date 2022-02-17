import { useEffect } from "react";
import { Box, Container, Typography, Button, Grid} from "@mui/material";
import { Posts } from "./components/Posts/Posts";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getEvents } from './actions/posts'
import { Body, HeroHeading, HeroImg, } from "./style/home";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch( getEvents() )
  }, [dispatch])

  return (
    <Body>
    <Box sx={{width:'90vw', maxWidth: 1800, m:'auto'}} display="flex" justifyContent="center" alignItems="center" flexDirection='column'>
    <Grid 
    container 
    sx={{m: 0, p: 0, width:'90%', alignItems: "center"}}
    >
    <Grid item sx={{
        width: '100%', '@media screen and (min-width: 960px)': {
        width: '50%'}}}> 
    <HeroImg src="hero.png" alt="hero-img" />
    </Grid>
    <Grid item sx={{width: '100%', '@media screen and (min-width: 960px)': {
        width: '50%'}}}>
      <HeroHeading>Won't you join Mokumoku-kai in Vancouver?</HeroHeading>
      <p>Mokumoku-kai is a group of participants who gather to study, work, or read in silence. 
        It's held in the developer community in Japan.
        Mokumoku means "silently", Kai means "meeting".
        Don't you want to have a productive weekend?
        Let's join MokuMoku Vancouver!
      </p>
    </Grid>
    </Grid >
      <Container>
      <Posts/> 
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{m: 5}}>
      <Link to="/admin" style={{ textDecoration:'none' }}><Button sx={{m: 'auto'}} variant="contained">Admin</Button></Link>
      </Box>
    </Box>
    </Body>
  )
}

export default App
