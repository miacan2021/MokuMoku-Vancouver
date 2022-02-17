import { useEffect } from "react";
import { Box, Container, Typography, Button, Grid} from "@mui/material";
import { Posts } from "./components/Posts/Posts";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getEvents } from './actions/posts'
import { Body, HeroHeading, HeroImg, HeroP, HeroWrapper, Logo, LogoWrapper, } from "./style/home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch( getEvents() )
  }, [dispatch])

  return (
    <Body>
      <LogoWrapper>
      <Logo>
        MokuMoku<br/>Vancouver
      </Logo>
      </LogoWrapper>
    <Box sx={{width:'80vw', maxWidth: 1100, m:'auto'}} display="flex"
     justifyContent="center" alignItems="center" flexDirection='column'
     >
    <Grid 
    container	
    sx={{m: 0, p: 0, width:'100%', alignItems:'center', justifyContent:'center', boxShadow: 2,
    background:'#fffffe', borderRadius:'5px', m:3, p:2, overflow:'hidden'}}
    >
    <Grid item 
    sx={{width: '100%', display:'flex',alignItems:'center', justifyContent:'center',
    '@media screen and (min-width: 900px)': {width: '48%'}}}
    xs={12} md={6}
    > 
    <HeroImg src="hero.png" alt="hero-img" />
    </Grid>
    <Grid item 
        sx={{width: '100%', p: 3, background:'#fffffe', borderRadius:'5px', 
        display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column',
        '@media screen and (min-width: 900px)': {width: '48%'}}}
        xs={12} md={6}
        >
      <HeroHeading>Won't you join Mokumoku-kai in Vancouver?</HeroHeading>
      <HeroP>Mokumoku-kai is a group of participants who gather to study, work, or read in silence. 
        It's held in the developer community in Japan.
        Mokumoku means "silently", Kai means "meeting".
        Don't you want to have a productive weekend?
        Let's join MokuMoku Vancouver!
      </HeroP>
    </Grid>
    </Grid>
      <Container>
      <Posts/> 
      </Container>
      <Box sx={{py: 5 }} >
      <Link to="/admin" style={{ textDecoration:'none' }}><Button sx={{ background:'#90b4ce'}} variant="contained">Admin Page</Button></Link>
      </Box>
    </Box>
    </Body>
  )
}

export default App
