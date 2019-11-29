import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, Typography, Card } from '@material-ui/core';
import { Button } from "@material-ui/core";
import { Container } from '@material-ui/core';
import Projects from '../../molecules/Projects/Projects';

const colortheme = createMuiTheme({
  palette: {
    primary: { main: "#fff", contrastText: "#fff" },
    secondary: { main: "#000", contrastText: "#fff" }
  }
});


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  paperContainer: {
    backgroundBlendMode: `color-burn`,
    backgroundImage: `url('/images/2000x1000-im_bg-001-1.jpg'),linear-gradient(130deg,#4a0063 25%,rgba(31,0,40,0.9) 100%) !important;`
  },
  title: {
    flexGrow: 1
  },
  backgroundOrange: {
    backgroundColor: '#ff7a59'
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
  useEffect(() => { }, []);
  return (
    <Fragment>
      <MuiThemeProvider theme={colortheme}>
        <div className={classes.paperContainer}>
          <Typography m={4} style={{ paddingTop: '60px', paddingBottom: '30px' }} component="h1" variant="h2" align="center" color="primary" gutterBottom>
            Corporate Agents
          </Typography>
          <Container>
            <Typography variant="h5" align="center" color="primary" paragraph>
              We are 4 students who graduated from Soft Uni after 2 years of hard studying.
              Now, we are ready to kickstart a career in the corporate environment and
              this portfolio website is our chance to shine.
            </Typography>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ paddingTop: '30px', paddingBottom: '50px' }}
            >
              <Button variant="contained" className={classes.backgroundOrange}  color="secondary" style={{ padding: '14px' }}>
                Get Started
              </Button>
            </Grid>
          </Container>
        </div>
      </MuiThemeProvider>
      <Container>
        <Projects />
      </Container>
    </Fragment>
  );
};

export default Home;
