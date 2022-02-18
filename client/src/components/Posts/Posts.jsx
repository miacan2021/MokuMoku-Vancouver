import { Post } from './Post'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'

export const Posts = () => {
  const events = useSelector((state) => state.events)
  return !events.length ? (
    <Typography>No Data</Typography>
  ) : (
    <Grid
      container
      spacing={1}
      sx={{
        m: 0,
        p: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (min-width: 40em)': {
          justifyContent: 'start',
        },
      }}
    >
      {events.map((event) => (
        <Grid key={event._id} item sm={12} md={4} sx={{ mb: 2 }}>
          <Post event={event} />
        </Grid>
      ))}
    </Grid>
  )
}
