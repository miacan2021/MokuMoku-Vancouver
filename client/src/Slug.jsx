import { useLocation } from "react-router-dom";
import moment from 'moment';
import ReactMarkdown from 'react-markdown'
import TextField from '@mui/material/TextField';
import { addMember } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Slug = () => {
  const location = useLocation();
  const id = location.state
  let event = useSelector((state) => state.events.find((e) => e._id === id))
  const [member, setMember] = useState({name:'', twitterId:''})
  const [memberNum, setMemberNum] = useState(event.members.length + 1)
  const dispatch = useDispatch()
  const date = moment(event.date).format('MMMM Do, h:mm a')

const handleSubmit = (e) => {
  e.preventDefault()
  event.members = [...event.members, member]
  dispatch(addMember(event._id, event.members))
  setMemberNum((prev) => prev + 1)
  setMember({name:'', twitterId:''})
}

  return (
    <div>
      {event.title}
      {date}
      <ReactMarkdown>
      {event.description}
      </ReactMarkdown>
      {event.map && <iframe src={event.map} style={{border: 'none'}} title={event.title}></iframe>}
      <TableContainer component={Paper} sx={{ maxWidth: 300, m:'auto', p:3 }}>
      <Table sx={{ maxWidth: 300 }} >
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">TwitterID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {event.members.map((member,i) => (
               <TableRow
                 key={i}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
               >
                 <TableCell align="center">
                   {member.name}
                 </TableCell>
                 <TableCell align="center">{member.twitterId}</TableCell>
               </TableRow>
      ))}
       </TableBody>
      </Table>
    </TableContainer>

      <h1>join</h1>
      <form onSubmit={handleSubmit}>
      <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          value={member.name}
          onChange={(e) => setMember({...member, name: e.target.value})}
        />
      <TextField
          required
          id="outlined-required"
          label="Twitter ID"
          name="twitterId"
          value={member.twitterId}
          onChange={(e) => setMember({...member, twitterId: e.target.value})}
        />
        {memberNum <= event.limitNum ?
          <button type="submit" >submit</button>
        :
         <button type="submit" disabled >submit</button>
        }
      
      </form>
    </div>
  )
}
