import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1> Thank you for the submition</h1>
          <p>Further instructions in your email.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
