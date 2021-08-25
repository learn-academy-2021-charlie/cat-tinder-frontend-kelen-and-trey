import React, { Component } from 'react'
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
  Button,
  Container
} from '@material-ui/core'
const useStyles = theme => ({
  root: {
      marginLeft: 10,
      marginRight: 10
  },
  heading: {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightRegular
  },
  listContainer: {
    maxWidth: "500px",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column wrap",
  }
});
class CatIndex extends Component{
  constructor(props){
    super(props);
    this.state = {image: ""};
  }
  componentDidMount(){
    fetch("https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80")
        .then(response => response.json())
        .then(json => this.setState({ image: json.data }));
  }
  render(){
    const {classes} = this.props;
    const { cats } = this.props
    return(
      <Container className = {classes.listContainer} >
        <h2>CatIndex component</h2>
        <img src={catImage}/>
        {cats && cats.map(cat => {
          return(
            <Container maxWidth="sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image= {catImage}
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
                <Button size="small" color="primary">
                  Learn More
                </Button>
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
    )
  }
}

// export default CatIndex
export default withStyles(useStyles) (CatIndex)
