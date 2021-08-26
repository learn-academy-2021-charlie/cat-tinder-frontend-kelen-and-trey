import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CatCard from '../components/CatCard'
import {
  Container
} from '@material-ui/core'
import AppContext from '../context/AppContext'
import { withRouter } from 'react-router-dom'

const useStyles = theme => ({
  listContainer: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
    alignContent: 'space-around',
    paddingTop: '50px',
    width: '100%',
  },
});
const CatIndex = ({history, classes}) => {
  const appContext = useContext(AppContext)
  const cats = appContext.state.cats
  return(
    <Container>
      <Container className={classes.listContainer} data-testid='index-container'>
        {cats && cats.map((cat, i) => <CatCard id={cat.id} key={i} name={cat.name} index={i} age={cat.age} enjoys={cat.enjoys}/>
        ) }
      </Container>
    </Container>
  )
}

export default withStyles(useStyles)(withRouter(CatIndex))
