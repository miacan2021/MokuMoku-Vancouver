import { useState, useEffect } from 'react'
import { Post } from './Post'
import { useSelector } from 'react-redux'
import { Grid, Skeleton, Card } from '@mui/material'

import { CalenderTitle } from '../../style/home'
import { PostContent } from '../../style/post'

export const Posts = () => {
  const events = useSelector((state) => state.events)
  const [haveEventsData, setHaveEventsData] = useState(false)
  const postEvents = events.slice(0, 6)

  useEffect(() => {
    if (events.length) {
      setHaveEventsData(true)
    }
  }, [events.length])

  return (
    <>
      <CalenderTitle>Calendar of MokuMoku Vancouver</CalenderTitle>
      <Grid
        container
        spacing={2}
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
        {haveEventsData ? (
          postEvents.map((event) => (
            <Grid key={event._id} item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
              <Post event={event} />
            </Grid>
          ))
        ) : (   
        {Array(3).map((arr, i) => (
          <Grid item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
            <Card
              sx={{
                minWidth: 300,
                maxWidth: 345,
                minHeight: 290,
                maxHeight: 400,
                m: 'auto',
                background: '#fff',
              }}
            >
              <Skeleton variant="rectangular" height={140} />
              <PostContent>
                <Skeleton animation="wave" width={'100%'} sx={{ m: 2 }} />
                <Skeleton animation="wave" width={'100%'} sx={{ m: 2 }} />
              </PostContent>
              <Skeleton animation="wave" width={'90%'} sx={{ m: 2 }} />
            </Card>
          </Grid>)
          )}
        )}
      </Grid>

    </>
  )
}
