import { Post } from "./Post"
import { useSelector } from "react-redux"
import { Grid, CircularProgress, Typography } from "@mui/material"

export const Posts = () => {
    const events = useSelector((state) => state.events)
  return (
    !events.length ? 
      <Typography>No Data</Typography>
    : 
    (
      <Grid container alignItems="stretch" spacing={3}>
          {events.map(event => (
            <Grid key={event._id} item xs={12} sm={3}>
              <Post event={event} />
            </Grid>
          ))}
      </Grid>
    )
  )
}
