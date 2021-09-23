import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Login.css'
import { Link } from 'react-router-dom';
import HOCComponent from './HOCComponent';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';


function Login(props) {

    const[username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    function loginSubmit(){
        console.log("Login suucessfully completed")
    }
    return (
        <div className="login">

            <div className="left_box">
                <h2>WELCOME TO</h2>
                <img src={props.image} alt="logo"/>

                <p id="p1" > <p id="p1">Login in to get in the moment updates on the things </p>
               <tab></tab> <p id="p2">that interest you</p></p>

               <form className="form" >
             
                    <input type="text" name="username/email" placeholder="Username/Email" value={username} onChange={(event)=>setUsername(event.target.value)} />
                  
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <br/>
                    <br/>
                    <button type="submit" onClick={loginSubmit}>SIGN IN</button><br />
               </form>
               <br/>
             
               Don't have an account?<Link to="/Register" > <span>Sign Up Now</span></Link><br />
            </div>
           
        </div>
    )
}

export default HOCComponent(Login);
