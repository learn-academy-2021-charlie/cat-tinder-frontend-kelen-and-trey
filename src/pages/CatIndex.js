import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CatCard from '../components/CatCard'
import {
  Grid,
  Container
} from '@material-ui/core'
import AppContext from '../context/AppContext'
import { withRouter } from 'react-router-dom'

const useStyles = theme => ({
  listContainer: {
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    // alignContent: 'space-around',
    paddingTop: '50px',
    width: '100%',
  },
});
const CatIndex = ({history, classes}) => {
  const appContext = useContext(AppContext)
  const cats = appContext.state.cats
  return(
    <Container>
      {/* <Container className={classes.listContainer} data-testid='index-container'> */}
      <Grid container justifyContent="center" spacing= {0} >
        {cats && cats.map((cat, i) => <CatCard id={cat.id} key={i} name={cat.name} index={i} age={cat.age} enjoys={cat.enjoys}/>
        ) }
      </Grid>
      {/* </Container> */}
    </Container>
  )
}

export default withStyles(useStyles)(withRouter(CatIndex))
