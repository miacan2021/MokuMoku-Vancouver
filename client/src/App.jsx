import { useEffect } from "react";
import { Box, Container, Typography, Button} from "@mui/material";
import { Posts } from "./components/Posts/Posts";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getEvents } from './actions/posts'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch( getEvents() )
  }, [dispatch])
   
  return (
    <Container maxidth="lg">
      <Typography variant="h3" align="center">MokuMoku - Vancouver</Typography>
      <Container sx={{m:3}}>
      <Posts/> 
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{m: 5}}>
      <Link to="/admin" style={{ textDecoration:'none' }}><Button sx={{m: 'auto'}} variant="contained">Admin</Button></Link>
      </Box>
    </Container>
  );
}

export default App;
