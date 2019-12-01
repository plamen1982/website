import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
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
  background: {
    backgroundColor: '#fff',
    color: '#000'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.background} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              style={{
                textDecoration: 'none',
                padding: 15,
                borderRadius: 5,
                color: '#000'
              }}
              to="/home"
            >
              Home
            </NavLink>
          </Typography>
          <Typography>
            <NavLink
              to="/login"
              className={classes.primary}
              style={{
                textDecoration: 'none',
                padding: 15,
                borderRadius: 5,
                backgroundColor: 'grey',
                marginRight: 5
              }}
            >
              Login
            </NavLink>
          </Typography>
          <Typography>
            <NavLink
              to="/register"
              className={classes.primary}
              style={{
                textDecoration: 'none',
                padding: 15,
                borderRadius: 5,
                backgroundColor: 'grey',
                marginRight: 5
              }}
            >
              Register
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
