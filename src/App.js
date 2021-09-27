import React from 'react'
import './App.css';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import Register from './components/Registration/Register';
import { Component } from 'react';
import Login from './components/Registration/Login';
import HomePage from './components/Postlogin/Home/HomePage';
import ProtectedRoute from './protected';





 function App(){
   return(
     <div className="App">
      <BrowserRouter>
      <div>
       <Switch>
         <Route exact path="/Register" component={Register}/>
         <Route  exact path="/Login"   component={Login}/>
        
         <ProtectedRoute  path="/HomePage"  component={HomePage} /> 
            <Redirect to="/Login" />
      
       </Switch>
      </div>
      </BrowserRouter>
    
     </div>
   )
 }
 export default App