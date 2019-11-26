import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  backgroundOrange: {
    backgroundColor: 'orange'
  },
  backgroundBrown: {
    backgroundColor: 'brown'
  },
  color: {
    color: theme.palette.common.white
  }
}));
const Home = () => {
  const classes = useStyles();
  useEffect(() => {}, []);
  return (
    <Container style={{ paddingTop: 50 }}>
      <Grid container spacing={5} justify="center">
        <Grid md={6} item className={classes.backgroundOrange}>
          <Typography align="center" className={classes.color}>
            Placeholder for home page
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.backgroundBrown}>
          <Typography align="center" className={classes.color}>
            Placeholder for home page
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
