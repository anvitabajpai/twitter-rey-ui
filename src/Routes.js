import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchSPA from "./containers/SearchSPA/index";

class Main extends Component {

  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <HashRouter>
              <div className="content">
                <Route  exact path="/" component={SearchSPA} />
              </div>
          </HashRouter>
        </MuiThemeProvider>
    );
  }
}

export default Main;
