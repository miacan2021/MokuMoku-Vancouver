import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const Post = ({event}) => {
  const date = moment(event.date).format('MMMM Do, h:mm a')

  return (
   <>
    <Card sx={{ maxWidth: 345 }}>
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
        <Link to={`/${event._id}`} state={event._id}><Button size="small" >More</Button></Link>
      </CardActions>
    </Card>
    </>
  )
}
