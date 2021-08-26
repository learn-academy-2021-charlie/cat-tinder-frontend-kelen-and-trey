import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CatCard from '../components/CatCard'
import {
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
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
    alignContent: 'space-around',
    paddingTop: '50px',
    width: '100%',
  },
  media: {
    height: 250,
    width: 400,
  },
  catContainer: {
    justifySelf: 'flex-start',
    width: '30%',
    alignSelf: 'left',
    paddingBottom: '50px'
  }
});
const CatIndex = ({classes}) => {
  const appContext = useContext(AppContext)
  const cats = appContext.cats
  return(
    <Container>
      <Container className={classes.listContainer}>
        {cats && cats.map((cat, i) => <CatCard id={cat.id} key={i} name={cat.name} index={i} age={cat.age} enjoys={cat.enjoys}/>
        ) }
      </Container>
    </Container>
  )
}

export default withStyles(useStyles) (CatIndex)
