import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <Container style={{ paddingTop: 50 }}>
      <Grid container spacing={5} justify="center">
        <Grid md={6} item style={{ background: 'orange' }}>
          <Typography align="center">Placeholder for home page</Typography>
        </Grid>
        <Grid md={6} item id="map-container" style={{ background: 'brown' }}>
          <Typography align="center">Placeholder for home page</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
