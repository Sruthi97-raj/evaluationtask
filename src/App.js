import React from 'react'
import './App.css';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Register from './components/Registration/Register';
import { Component } from 'react';
import Login from './components/Registration/Login';



 function App(){
   return(
     <div className="App">
      <BrowserRouter>
      <div>
       <Switch>
         <Route exact path="/Register" component={Register}/>
         <Route  exact path="/Login"   component={Login}/>
       </Switch>
      </div>
      </BrowserRouter>
    
     </div>
   )
 }
 export default App