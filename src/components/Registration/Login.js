import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Login.css'
import { Link } from 'react-router-dom';
import HOCComponent from './HOCComponent';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import {LOGIN_PAGE} from '../../common/Common';
import { emailValidation }from '../Registration/Validations'
import {passwordValidation} from '../Registration/Validations';
import { GiPoliceBadge } from "react-icons/gi"; 
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}


function Login(props) {
    console.log(localStorage.getItem("Username"))
    const[emailOrName,setemailOrName]=useState("");
    const [password,setPassword]=useState("");
    const [emailInputFlag,setEmailInputFlag]=useState(true)
    const [passwordInputFlag,setPasswordInputFlag]=useState(true)
    const [emailErrorMessage,setEmailErrorMessage]=useState("")
    const [passwordError, setPasswordError] = useState('')
    var submitValue = 0;

     function loginHandleChange(event){
        
        if(event.target.name==='name/email'){
            setemailOrName(event.target.value)
            setEmailInputFlag(false)
        }
        if(event.target.name==='password'){
            setPassword(event.target.value)
            setPasswordInputFlag(false)
        }
     }

    function loginSubmit(event) {
        event.preventDefault();
        var user = JSON.parse(localStorage.getItem('User Details'))

        if((emailInputFlag === true)&&(passwordInputFlag === true)){
            setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
            setPasswordInputFlag(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        else{
            var userNameCheck=user.find((item =>item.Username ===emailOrName))
             console.log("Username:",userNameCheck)

             var emailCheck=user.find((item => item.Email===emailOrName))

             if(emailCheck !== undefined && emailCheck.Password === password){
                 submitValue=1;

                var loggedUser =emailCheck.Username
                console.log("Logged User:",loggedUser)
                console.log("logged")
                localStorage.setItem("Authentication",true);
                localStorage.setItem("UserName",loggedUser)
                props.history.push("/HomePage")
                console.log("Home")



             }

             else if(userNameCheck !== undefined && userNameCheck.Password === password){
                 submitValue=1;
                 console.log("Logged")
                 loggedUser=userNameCheck.Username
                 console.log("Logged User:",loggedUser)
                 console.log("Logged")
                 localStorage.setItem("Authentication",true);
                 localStorage.setItem("UserName",loggedUser)
                 props.history.push("/HomePage")

             }
             else if(userNameCheck===undefined){
                 var emailValidate=emailValidation(emailOrName)
                 if(emailValidate=== true){
                     setEmailErrorMessage("")
                 }
                 else{
                     setEmailErrorMessage(LOGIN_PAGE.VALIDATION_MESSAGE)
                 }
             }
             else{
                 submitValue=0;

                 setPasswordError(LOGIN_PAGE.INCORRECT_PASSWORD)
             }
             if(submitValue === 1){
                 setemailOrName("");
                 setPassword("");
             }
        }

     }

    return (
        <div className="login">

            <div className="left_box">
                <h2>WELCOME TO</h2>
                <img src={props.image} alt="logo"/>

                <p id="p1" > <p id="p1">Login in to get in the moment updates on the things </p>
               <tab></tab> <p id="p2">that interest you</p></p>

               <form className="form"  method="Post">
               <i className="fas fa-user inputicon"></i>
                 < input type="text" name="name/email" placeholder="Username/Email" value={emailOrName} onChange={loginHandleChange} /><br/>
                     <span>{emailErrorMessage}</span>
                  
                     
                     <br/>

                    <input type="password" name="password" placeholder="Password" value={password} onChange={loginHandleChange}/><br/>
                    <span>{passwordError}</span>
                    <br/>
                   
                    <button type="submit" onClick={(event) =>loginSubmit(event)}>SIGN IN</button><br />
               </form>
               <br/>
             
               Don't have an account?<Link to="/Register" > <span>Sign Up Now</span></Link><br />
            </div>
           
        </div>
    )
}

export default HOCComponent(Login);
