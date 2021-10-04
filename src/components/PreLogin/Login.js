import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { LOGIN_PAGE } from '../../common/Constants';
import { emailValidation } from './Validations'
import LogoAndStyle from './LogoAndStyle';
// import {passwordValidation} from '../Registration/Validations';



function Login(props) {
    console.log(localStorage.getItem("UserName"))
    const [emailOrName, setemailOrName] = useState("");
    const [password, setPassword] = useState("");


    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    // const [passwordError, setPasswordError] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    var submitValue = 0;

    function loginHandleChange(event) {

        if (event.target.name === 'nameOremail') {
            setemailOrName(event.target.value)
            // setEmailInputFlag(false)
            setEmailErrorMessage("")
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value)
            // setPasswordInputFlag(false)
            setPasswordMessage("")
        }
    }

    function loginSubmit(event) {
        event.preventDefault();
        var user = JSON.parse(localStorage.getItem('User Details'))

        if (user === null) {
            console.log("Plase reistr")
            return alert("Please Register First")

        }

        if (emailOrName === '') {
            setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
        }

        if (password === '') {

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
                    console.log("Incorrect")
                    setPasswordMessage(LOGIN_PAGE.INCORRECT_PASSWORD)
                }


            }
            //    if((userNameCheck !==undefined) &&(password ==='') ){
            //        setPasswordMessage(LOGIN_PAGE.PASSWORD_EMPTY_MESSAGE)
            //    }
            //    if((userNameCheck.Password ===password) &&(emailOrName ==='')){
            //        setEmailErrorMessage(LOGIN_PAGE.USERNAME_EMPTY_MESSAGE)
            //    }

                if (userNameCheck.Password !== password) {
                setPasswordMessage(LOGIN_PAGE.INCORRECT_PASSWORD)
                    // setEmailErrorMessage(LOGIN_PAGE.VALIDATION_MESSAGE)

                }
            if (userNameCheck === undefined) {
                setEmailErrorMessage(LOGIN_PAGE.VALIDATION_MESSAGE)
            }
         


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
                <p id="p1">Log in to get in the moment updates on the things
                <br/>
               <p id="p2">that interest you</p> 
                </p>

                <form className="form" method="Post">
                    <i className="fas fa-user inputicon"></i>
                    < input type="text" name="nameOremail" placeholder="Username/Email" value={emailOrName} onChange={loginHandleChange} /><br />
                    <span className="register_error">{emailErrorMessage}</span>


                    <br />

                    <input type="password" name="password" placeholder="Password" value={password} onChange={loginHandleChange} /><br />
                    <span className="register_error">{passwordMessage}</span>
                    <br />

                    <button type="submit" onClick={(event) => loginSubmit(event)}>SIGN IN</button><br />
                </form>
                <br />

                Don't have an account?<Link to="/register" > <span>Sign Up Now</span></Link><br />
            </div>

        </div>
    )
}

export default LogoAndStyle(Login);
