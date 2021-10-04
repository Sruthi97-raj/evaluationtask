import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from './components/PreLogin/Register';
// import { Component } from 'react';
import Login from './components/PreLogin/Login';
import HomePage from './components/Postlogin/Home/HomePage';
import ProtectedRoute from './protected';
import { Dashboard } from '@material-ui/icons';
import Product from './components/Postlogin/Product/Product';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/product"  component={Product}/> */}
            <ProtectedRoute path="/homePage" component={HomePage} />
            <Redirect to="/homePage" />

          </Switch>
        </div>
      </BrowserRouter>

    </div>
  )
}
export default App