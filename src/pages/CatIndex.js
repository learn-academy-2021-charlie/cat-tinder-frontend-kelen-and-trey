import React, { useContext, useState } from 'react'
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
  // Button,
  Container
} from '@material-ui/core'
import AppContext from '../context/AppContext'

const useStyles = theme => ({
  root: {
      marginLeft: 10,
      marginRight: 10,
    justifySelf: 'center'
  },
  heading: {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightRegular
  },
  listContainer: {
    maxWidth: "500px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "row",
    alignContent: 'space-around'
  },
  media: {
    height: 250,
    width: 400,
  },
  catContainer: {
    justifySelf: 'flex-start'
  }
});
const CatIndex = ({classes}) => {
  const appContext = useContext(AppContext)
  const cats = appContext.cats
  return(
    <Container>
      <h2>CatIndex component</h2>
      <Container className={classes.listContainer}>
        {cats && cats.map((cat, i) => {
          return(
            <Container maxWidth="sm" data-testid= 'cat-profile' key={i} className={classes.catContainer}>
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
                    {cat.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Enjoys {cat.enjoys}
                  </Typography>
                  <Typography>
                  {cat.name} is {cat.age} years old
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <NavLink to={`/catShow/${cat.id}`}>Show {cat.name}'s details</NavLink>
                {/* <Button size="small" color="primary"> */}
                {/*   Learn More */}
                {/* </Button> */}
              </CardActions>
            </Card>

            {/* <div key={cat.id}>
              <NavLink to={`/catShow/${cat.id}`}>Show {cat.name}'s details</NavLink>
              <h2>{cat.name} is {cat.age} years old.</h2>
              <h3>Enjoys {cat.enjoys}.</h3>
            </div> */}
          </Container>
          )
        }) }
      </Container>
    </Container>
  )
}

// export default CatIndex
export default withStyles(useStyles) (CatIndex)
