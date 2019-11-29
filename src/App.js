import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/muiTheme';

import Home from './components/screens/Home/Home';
import Login from './components/screens/Login/Login';
import Register from './components/screens/Register/Register';
import AppNavigationBar from './components/molecules/AppNavigationBar/AppNavigationBar';
import BottomNavigationBar from './components/molecules/BottomNavigationBar/BottomNavigationBar';
import Projects from './components/molecules/Projects/Projects';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppNavigationBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route component={Home} />
        </Switch>
        <BottomNavigationBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;