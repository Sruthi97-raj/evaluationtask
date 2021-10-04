import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from './components/PreLogin/Register';
// import { Component } from 'react';
import Login from './components/PreLogin/Login';
import HomePage from './components/Postlogin/Home/HomePage';
import ProtectedRoute from './protected';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <ProtectedRoute path="/homePage" component={HomePage} />
            <Redirect to="/homePage" />

          </Switch>
        </div>
      </BrowserRouter>

    </div>
  )
}
export default App