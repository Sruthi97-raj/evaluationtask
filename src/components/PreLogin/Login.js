import React, { useState } from 'react'

// import './Login.css'
import { Link } from 'react-router-dom';
import HOCComponent from './HOCComponent';

import { LOGIN_PAGE } from '../../common/Constants';
import { emailValidation } from './Validations'
// import {passwordValidation} from '../Registration/Validations';



function Login(props) {
    console.log(localStorage.getItem("UserName"))
    const [emailOrName, setemailOrName] = useState("");
    const [password, setPassword] = useState("");
    const [emailInputFlag, setEmailInputFlag] = useState(true)
    const [passwordInputFlag, setPasswordInputFlag] = useState(true)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    // const [passwordError, setPasswordError] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    var submitValue = 0;

    function loginHandleChange(event) {

        if (event.target.name === 'name/email') {
            setemailOrName(event.target.value)
            setEmailInputFlag(false)
            setEmailErrorMessage("")
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value)
            setPasswordInputFlag(false)
            setPasswordMessage("")
        }
    }

    function loginSubmit(event) {
        event.preventDefault();
        var user = JSON.parse(localStorage.getItem('User Details'))

        if(emailInputFlag === true){
            setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
        }
        if(passwordInputFlag === true){
        //     setPasswordError(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
        setPasswordMessage(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
        }

        if ((emailInputFlag === true) && (passwordInputFlag === true)) {
            setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
            setPasswordMessage(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        if ((emailInputFlag === true) && (passwordInputFlag === false)) {
            setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
        }
        if ((emailInputFlag === false) && (passwordInputFlag === true)) {
            setPasswordMessage(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        else {
            var userNameCheck = user.find((item => item.Username === emailOrName))
            // console.log("Username:", userNameCheck)



            var emailCheck = user.find((item => item.Email === emailOrName))

            if (emailCheck !== undefined && emailCheck.Password === password) {
                submitValue = 1;

                var loggedUser = emailCheck.Username
                console.log("Logged User:", loggedUser)
                console.log("logged")
                localStorage.setItem("Authentication", true);
                localStorage.setItem("UserName", loggedUser)
                props.history.push("/HomePage")
                console.log("Home")



            }

            else if (userNameCheck !== undefined && userNameCheck.Password === password) {
                submitValue = 1;
                console.log("Logged")
                loggedUser = userNameCheck.Username
                console.log("Logged User:", loggedUser)
                console.log("Logged")
                localStorage.setItem("Authentication", true);
                localStorage.setItem("UserName", loggedUser)
                props.history.push("/HomePage")

            }
            else if (userNameCheck === undefined) {
                var emailValidate = emailValidation(emailOrName)
                if (emailValidate === true) {
                    setEmailErrorMessage(LOGIN_PAGE.VALIDATION_MESSAGE)
                }
                else{
                    setPasswordMessage(LOGIN_PAGE.INCORRECT_PASSWORD)
                }


            }
           if((userNameCheck !==undefined) &&(passwordInputFlag ===true) ){
               setPasswordMessage(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
           }
        //    if((userNameCheck.Password ===password) &&(emailInputFlag === true)){
        //        setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
        //    }

            // if (userNameCheck.Password !== password) {
            //     setPasswordMessage(LOGIN_PAGE.INCORRECT_PASSWORD)
            //     // setEmailErrorMessage(LOGIN_PAGE.VALIDATION_MESSAGE)

            // }
           
            // else {
            //     submitValue = 0;

            //     setPasswordMessage(LOGIN_PAGE.INCORRECT_PASSWORD)
            // }


            if (submitValue === 1) {
                setemailOrName("");
                setPassword("");
            }
        }

    }

    return (
        <div className="login">

            <div className="left_box">
                <h2>WELCOME TO</h2>
                <img src={props.image} alt="logo" />

                <p className="para">Login in to get in the moment updates on the things </p>
                <p className="para">that interest you</p>

                <form className="form" method="Post">
                    <i className="fas fa-user inputicon"></i>
                    < input type="text" name="name/email" placeholder="Username/Email" value={emailOrName} onChange={loginHandleChange} /><br />
                    <span className="register_error">{emailErrorMessage}</span>


                    <br />

                    <input type="password" name="password" placeholder="Password" value={password} onChange={loginHandleChange} /><br />
                    <span className="register_error">{passwordMessage}</span>
                    <br />

                    <button type="submit" onClick={(event) => loginSubmit(event)}>SIGN IN</button><br />
                </form>
                <br />

                Don't have an account?<Link to="/Register" > <span>Sign Up Now</span></Link><br />
            </div>

        </div>
    )
}

export default HOCComponent(Login);
