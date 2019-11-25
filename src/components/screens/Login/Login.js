import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Login = () => {
  useEffect(() => {}, []);
  return (
    // Container is used so the whole content to be in the middle of the page
    <Container style={{ paddingTop: 50, backgroundColor: 'grey' }}>
      {/*  This grid is like a row or the container for the columns */}
      <Grid container spacing={5} justify="center">
        {/* This grid is for the width or how many columns(md={8}) should be the width of the Grid  */}
        <Grid md={8} item>
          {/* Typography is used for container for text, you can add fontSize, fontFamily, ect.. */}
          <Typography align="center">Placeholder for Login Form</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
