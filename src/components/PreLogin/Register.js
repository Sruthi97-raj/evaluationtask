import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { emailValidation } from '../PreLogin/Validations';
import { passwordValidation } from '../PreLogin/Validations';
import { REGISTER_PAGE } from '../../common/Constants'
import LogoAndStyle from './LogoAndStyle';

function Register(props) {
    const [username, setUserName] = useState("");
    const [userNameErrorMessage, setUserNameErrorMessage] = useState("")

    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const [email, setEmail] = useState("");
    // const [flag,setFlag]=useState(false);

    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    var submitvalue = 0;


    function submitHandleRegister(event) {



        if (event.target.name === "username") {
            setUserName(event.target.value);
            // setUserNameFlag(false)
            setUserNameErrorMessage("")


        }

        if (event.target.name === "email") {
            setEmail(event.target.value);
            // setEmailFlag(false)
            setEmailErrorMessage("")

            var email = event.target.value
            var emailValid = emailValidation(email);
            console.log("Email", emailValid)
            if (emailValid === true) {
                setEmailError(false)
            }
            else {
                setEmailError(true)
            }

        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
            // setPasswordFlag(false);
            setPasswordErrorMessage("")

            var password = event.target.value;
            var passwordValid = passwordValidation(password)
            console.log("Password", passwordValid);

            if (passwordValid === true) {
                setPasswordError(false);

            }
            else {
                setPasswordError(true);
            }

        }
    }



    function registerSubmit(event) {


        event.preventDefault();




        if (username === '') {
            setUserNameErrorMessage(REGISTER_PAGE.USERNAME_EMPTY_MESSAGE)

        }

        if (email === '') {
            setEmailErrorMessage(REGISTER_PAGE.EMAIL_EMPTY_MESSAGE)
        }
        else if (emailError === true) {
            console.log("wrong validation for email")
            setEmailErrorMessage(REGISTER_PAGE.EMAIL_VALIDATION_MESSAGE)
        }
        else {
            setEmailErrorMessage('')
            console.log("email", email)
        }



        if (password === '') {

            setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        else if (passwordError === true) {
            setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_VALIDATION_MESSAGE)
        }




        else {
            if (emailError === false && passwordError === false) {
                let details = { Username: username, Email: email, Password: password }
                var user = JSON.parse(localStorage.getItem('User Details'))

                if (user === null) {
                    user = [];
                    user.push(details);

                    window.localStorage.setItem('User Details', JSON.stringify(user))
                    submitvalue = 1;
                    alert(REGISTER_PAGE.SUCCESSFULL_REGISTRATION)
                    props.history.push("/login")
                }

                else {
                    var checkEmail = user.find(item => item.Email === email);

                    var checkUserName = user.find((item => item.Username === username));
                    var checkUserEmail = user.find((item => item.Email === username));

                    console.log("name", checkUserEmail);


                    if (checkEmail === undefined && checkUserName === undefined && checkUserEmail === undefined) {
                        user.push(details);

                        window.localStorage.setItem('User Details', JSON.stringify(user))
                        submitvalue = 1;
                        alert(REGISTER_PAGE.SUCCESSFULL_REGISTRATION)
                        props.history.push('/login')
                    }

                    else {
                        submitvalue = 0;
                        alert(REGISTER_PAGE.VALIDATION_MESSAGE)
                    }
                }

            }
            else {
                if (emailError === true || passwordError === false) {


                    setEmailErrorMessage(REGISTER_PAGE.EMAIL_VALIDATION_MESSAGE)

                }
                else if (emailError === false && passwordError === true) {
                    setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_VALIDATION_MESSAGE)
                }
                else {
                    setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_VALIDATION_MESSAGE)
                }
            }
            submitvalue = 0;


        }
        if (submitvalue === 1) {
            setUserName("");
            setEmail("");
            setPassword("");
        }

    }
    return (
        <div className="register">
            <div className="registerleft-box">
                <h3 className="welcome">WELCOME TO</h3>
                <img className="logocls" src={props.image} alt="logo"></img>
                <p id="p1">Log 
                 to get in the moment updates on the things
              
               <p id="p2">that interest you</p> 
                </p>
             

                <form className="form" name="register">

                    <input type="text" name="username" placeholder="Username" value={username} onChange={submitHandleRegister} required /><br />
                    <span className="error">{userNameErrorMessage}</span>
                    <br />


                    <input type="text" name="email" placeholder="Email" value={email} onChange={submitHandleRegister} required /><br />
                    <span className="error">{emailErrorMessage}</span>
                    <br />


                    <input type="password" name="password" placeholder="Password" value={password} onChange={submitHandleRegister} required /><br />
                    <span className="error">{passwordErrorMessage}</span>
                    <br />


                    <button type="submit" onClick={registerSubmit} >Sign Up</button><br />
                </form>
                <br />

                Already Register? <Link to="/login" > <span>Sign In Now</span></Link><br />

            </div>
        </div>
    )
}

export default LogoAndStyle(Register);