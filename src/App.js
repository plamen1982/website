import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from 'react-router-dom';
import Home from './components/screens/Home/Home';
import Login from './components/screens/Login/Login';
import Register from './components/screens/Register/Register';
import AppNavigationBar from './components/molecules/AppNavigationBar/AppNavigationBar';
import BottomNavigationBar from './components/molecules/BottomNavigationBar/BottomNavigationBar';
const App = () => {
  return (
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
  );
};

export default App;
