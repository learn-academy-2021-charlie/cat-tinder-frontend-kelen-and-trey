import React from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import  catImage from '../assets/cat.jpeg'
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = theme => ({
  root: {
    marginLeft: 10,
    marginRight: 10,
    // justifySelf: 'center'
  },
  heading: {
    fontSize: "1rem",
    fontWeight: theme.typography.fontWeightRegular
  },
  media: {
    // justifySelf: 'center',
     maxHeight: '400px',
    // maxwidth: '60%',
  },
  catContainer: {
    display: 'flex',
    // justifySelf: 'flex-start',
    width: '40%',
    alignSelf: 'left',
    paddingBottom: '10px',
    paddingTop:'10px'
  }
});

const CatCard = ({ classes, index, name, age, enjoys, id }) => {
  return(
    <Grid maxWidth="sm" data-testid='cat-profile' key={index} className={classes.catContainer}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            src={catImage}
            title="Cute Orange Cat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Enjoys {enjoys}
            </Typography>
            <Typography>
            {name} is {age} years old
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <NavLink to={`/catShow/${id}`}>Show {name}'s details</NavLink>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default withStyles(useStyles)(CatCard)
