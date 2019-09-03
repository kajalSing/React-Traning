import React from 'react';
import {TextFieldDemo} from './pages/TextFieldDemo';
import { MuiThemeProvider } from '@material-ui/core';
import AuthRoute from './Routes/AuthRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Login from './pages/Login';

import { NoMatch } from './pages/NoMatch';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import {Trainee} from './pages/Traniee';
import {TextFieldInput} from './pages/TextFieldInput';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider >
        <Router>
          <Switch>
            <PrivateRoute
              component={Login}
              exact
              path="/login"
            />
            <AuthRoute
              component={Trainee}
              exact
              path="/trainee"
            />
            <AuthRoute
              component={TextFieldDemo}
              exact
              path="/textfield"
            />
            <AuthRoute
              component={TextFieldInput}
              exact
              path="/inputfield"
            />
           
            <AuthRoute
              component={NoMatch}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;