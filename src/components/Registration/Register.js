import React from 'react'
import { Button, TextField } from '@material-ui/core'
import './register.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Register() {
    const[username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [flag,setFlag]=useState(false);
    
   

    function submitHandleRegister(event){
   if(event.target.name==="username"){
       setUserName(event.target.value);
       
   }
       
        if(event.target.name==="email"){
            setEmail(event.target.value);
        }
        if(event.target.name==="password"){
            setPassword(event.target.value);
        }
    }
    
   

    function registerSubmit(){

        if(!username || !email || !password){
            setFlag(true);
        }
       else{
           setFlag(true);
           localStorage.setItem("Username",JSON.stringify(username));
           localStorage.setItem("Email",JSON.stringify(email));
           localStorage.setItem("passeord",JSON.stringify(password));
       }
    }
    return (
        <div className="register">
            <div className="registerleft-box">
                <h2>WELCOME TO</h2>
                 <img src={logo} alt="logo"></img>
                <p id="p1">Login in to get in the moment updates on the things </p>
               <tab></tab> <p id="p2">that interest you</p>

                <form className="form" name="register">
                <i className="fas fa-user inputicon"></i>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={submitHandleRegister}  required/>
                    <br/>
                    <br/>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={submitHandleRegister} required/>
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={submitHandleRegister}required/>
                    <br/>
                    <br/>
                    <button type="submit"onClick={registerSubmit} >Sign Up</button><br />
                </form>
                <br/>
              
                Already Register? <Link to="/Login" > <span>Sign In Now</span></Link><br />

            </div>
        </div>
    )
}

export default Register
