import {
  CardMedia,
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
} from '@mui/material'
import moment from 'moment'
import { Link } from 'react-router-dom'

export const Post = ({ event }) => {
  const date = moment(event.date).format('MMMM Do, h:mm a')

  return (
    <>
      <Card
        sx={{
          minWidth: 220,
          maxWidth: 345,
          minHeight: 280,
          maxHeight: 400,
          m: 'auto',
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={event.image ? event.image : 'no-img.jpg'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/${event._id}`}
            state={event._id}
            style={{ textDecoration: 'none' }}
          >
            <Button size="small">More</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
